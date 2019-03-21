import { Component } from 'react';
import localStorage from 'local-storage';
import { ThemeProvider } from 'mineral-ui/themes';
import Select from 'mineral-ui/Select';
import Button from 'mineral-ui/Button';
import Player from '../components/Player';
import FactoryDisplay from '../components/FactoryDisplay'; // eslint-disable-line
import Center from '../components/Center'; // eslint-disable-line
import generateTilebag from '../services/tilebag';

export default class Index extends Component {
  state = {
    playerCount: false,
    currentPlayer: 0,
    tileBag: generateTilebag(),
    isReadyToPlay: false,
    factoryDisplays: [],
    centerTiles: [],
    players: [], // eslint-disable-line
  };

  possiblePlayers = [
    {
      text: '2',
      value: '2',
    },
    {
      text: '3',
      value: '3',
    },
    {
      text: '4',
      value: '4',
    },
  ];

  possibleFactoryDisplays = [
    {
      players: 2,
      factoryDisplays: 5,
    },
    {
      players: 3,
      factoryDisplays: 7,
    },
    {
      players: 4,
      factoryDisplays: 9,
    },
  ];

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  setUpRound = () => {
    // Layout factory display thingys
    // Put the tiles on the things.
    const { playerCount, players } = this.state;
    const factoryDisplayCount = this.determineFactoryDisplayCount(playerCount);

    const factoryDisplays = Array(factoryDisplayCount)
      .fill([])
      .map(() => this.drawTiles());

    // if there are tiles in the bag, give them 4.
    // Otherwise build a new bag, then give them 4.
    // <FactoryDisplay tiles=[0,2,4,0] />

    this.setState({ isReadyToPlay: true, factoryDisplays });

    // Update first player.
    const firstPlayerTileHolder = players
      .findIndex(({ willBeFirstNextRound }) => (willBeFirstNextRound));
    const nextFirstPlayerID = firstPlayerTileHolder > -1
      ? firstPlayerTileHolder : 0;
    this.setState({ currentPlayer: nextFirstPlayerID });

    // Reset player boards.
    const resetPlayers = players.map(player => ({
      ...player,
      tilesToPlace: [],
      willBeFirstNextRound: false,
      floorLine: [],
    }));
    this.setState({ players: resetPlayers });
  }

  drawTiles = () => {
    // return 4 tiles.
    // remove those tiles from the state.
    const { tileBag } = this.state;
    const tilesToDraw = tileBag.splice(0, 4);
    this.setState({ tileBag });

    if (tilesToDraw.length === 4) {
      return tilesToDraw;
    }

    // Refresh bag and draw if not enough.
    const newTilebag = generateTilebag();
    const newTiles = newTilebag.splice(0, 4);
    this.setState({ tileBag: newTilebag });
    return newTiles;
  }

  handlePlayerSelection = ({ value }) => {
    const playerCount = Number(value);
    const players = Array(playerCount).fill({
      tilesToPlace: [],
      score: 0,
      willBeFirstNextRound: false,
      patternLines: [
        [false],
        [false, false],
        [false, false, false],
        [false, false, false, false],
        [false, false, false, false, false],
      ],
      floorLine: [],
    });
    this.setState({ playerCount, players });
    localStorage('playerCount', playerCount);
    localStorage('players', players);
  };

  hydrateStateWithLocalStorage = () => {
    const { state } = this;

    Object.keys(state).forEach((key) => {
      const value = localStorage.get(key);

      if (!value) {
        return;
      }

      this.setState({ [key]: value });
    });
  };

  determineFactoryDisplayCount = (playerCount) => {
    if (!playerCount) {
      return false;
    }

    const { factoryDisplays } = this.possibleFactoryDisplays
      .find(({ players }) => (players === playerCount));

    return factoryDisplays;
  }

  handleTurnEnd = (playerID) => {
    const { playerCount } = this.state;
    const nextID = playerID + 1;
    if (nextID < playerCount) {
      this.setState({ currentPlayer: nextID });
      return;
    }

    // Otherwise start over at the beginning.
    this.setState({ currentPlayer: 0 });
  };

  handleTileSelection = (displayID, tileSelection) => {
    const {
      factoryDisplays,
      players,
      currentPlayer,
      centerTiles,
    } = this.state;
    const activeDisplay = factoryDisplays[displayID];

    // Remove activeDisplay from factory displays.
    factoryDisplays.splice(displayID, 1);
    this.setState({ factoryDisplays });

    // Give remaining tiles to center.
    const remainingTiles = activeDisplay.filter(tile => tile !== tileSelection);
    const newCenterTiles = centerTiles.concat(remainingTiles);
    this.setState({ centerTiles: newCenterTiles });

    // Get all of selected files from activeDisplay
    const playersTiles = activeDisplay.filter(tile => tile === tileSelection);
    const updatedPlayers = players.reduce((acc, player, index) => {
      if (index !== currentPlayer) {
        return [...acc, player];
      }

      const tilesToPlace = player.tilesToPlace.concat(playersTiles);

      return [
        ...acc,
        {
          ...player,
          tilesToPlace,
        },
      ];
    }, []);

    // Give selected tiles from display to current player.
    this.setState({ players: updatedPlayers });
  }

  assignTilesToPatternLines = (playerID, lineIndex, tilesToPlace) => {
    const { players } = this.state;
    const player = players[playerID];
    const { patternLines } = player;
    const line = patternLines[lineIndex];

    const tiles = tilesToPlace;
    const filledLine = line.map((place) => {
      if (place === false) {
        const assignedPlace = tiles.pop();
        if (Number.isInteger(assignedPlace)) {
          return assignedPlace;
        }

        return false;
      }

      return place;
    });

    // Update lines.
    const updatedLines = patternLines.map((patternLine, index) => {
      if (index === lineIndex) {
        return filledLine;
      }

      return patternLine;
    });

    const updatedPlayers = players.map((oldPlayer, index) => {
      if (index === playerID) {
        return {
          ...oldPlayer,
          patternLines: updatedLines,
          floorLine: oldPlayer.floorLine.concat(tiles),
          tilesToPlace: [],
        };
      }

      return oldPlayer;
    });

    this.setState({ players: updatedPlayers });
    this.handleTurnEnd(playerID);
  }

  render() {
    const {
      possiblePlayers,
      handlePlayerSelection,
      handleTurnEnd,
      handleTileSelection,
      assignTilesToPatternLines,
    } = this;

    const {
      playerCount,
      currentPlayer,
      tileBag, // eslint-disable-line
      isReadyToPlay,
      factoryDisplays,
      centerTiles,
      players,
    } = this.state;

    return (
      <ThemeProvider>
        <div>
          {!playerCount && (
            <div>
              <p>How many players are there?</p>
              <Select
                data={possiblePlayers}
                onChange={handlePlayerSelection}
                placeholder="Choose a number"
                required
              />
            </div>
          )}
          {playerCount && (
          <div>
            Player count:
            {playerCount}
          </div>
          )}
          {!isReadyToPlay && (<Button primary onClick={this.setUpRound}>Draw tiles</Button>)}
          {isReadyToPlay && factoryDisplays.map((tiles, index) => (
            <FactoryDisplay
              displayID={index}
              tiles={tiles}
              handleTileSelection={handleTileSelection}
            />
          ))}
          <Center tiles={centerTiles} />
          {players.map((player, index) => (
            <Player
              playerID={index}
              isCurrentPlayer={index === currentPlayer}
              handleTurnEnd={handleTurnEnd}
              data={player}
              assignTilesToPatternLines={assignTilesToPatternLines}
            />
          ))}
        </div>
      </ThemeProvider>
    );
  }
}
