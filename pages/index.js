import { Component } from 'react';
import localStorage from 'local-storage';
import { ThemeProvider } from 'mineral-ui/themes';
import Select from 'mineral-ui/Select';
import Player from '../components/Player';
import FactoryDisplay from '../components/FactoryDisplay'; // eslint-disable-line
import tilebag from '../services/tilebag';

export default class Index extends Component {
  state = {
    playerCount: false,
    currentPlayer: 0,
    tileBag: tilebag(),
    factoryDisplayCount: 0,
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

  componentDidUpdate(prevProps, prevState) {
    const { determineFactoryDisplayCount } = this;
    const { playerCount } = this.state;

    if (prevState.playerCount !== playerCount) {
      const factoryDisplayCount = determineFactoryDisplayCount(playerCount);
      this.setState({ factoryDisplayCount }); // eslint-disable-line
    }
  }

  handleChange = ({ value }) => {
    const playerCount = Number(value);
    this.setState({ playerCount });
    localStorage('playerCount', playerCount);
  };

  hydrateStateWithLocalStorage = () => {
    const { state } = this;

    Object.keys(state).forEach((key) => {
      const value = localStorage.get(key);

      if (!value) {
        return;
      }

      this.setState({ [key]: JSON.parse(value) });
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

  // Once the players are selected, that determines
  // the number of mats to display.


  render() {
    const { possiblePlayers, handleChange } = this;
    const {
      playerCount, currentPlayer, tileBag, factoryDisplayCount,
    } = this.state;

    console.log({
      currentPlayer, tileBag, possiblePlayers, factoryDisplayCount,
    });

    return (
      <ThemeProvider>
        <div>
          {!playerCount && (
            <div>
              <p>How many players are there?</p>
              <Select
                data={possiblePlayers}
                onChange={handleChange}
                placeholder="Choose a number"
                required
              />
            </div>
          )}
          {/* playerCount && this.determineFactoryDisplayCount(playerCount)) */}
          <h1>Todo</h1>
          <ul>
            <li>Make the player grid</li>
            <li>Make a component to hold the tiles</li>
            <li>Make a component to hold the mats</li>
          </ul>
          <Player />
        </div>
      </ThemeProvider>
    );
  }
}
