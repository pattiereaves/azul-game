import { Component } from 'react';
import localStorage from 'local-storage';
import { ThemeProvider } from 'mineral-ui/themes';
import Select from 'mineral-ui/Select';
import Player from '../components/Player';
import tilebag from '../services/tilebag';

export default class Index extends Component {
  state = {
    playerCount: false,
    currentPlayer: 0,
    tileBag: tilebag(),
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

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
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

  render() {
    const { possiblePlayers, handleChange } = this;
    const { playerCount, currentPlayer, tileBag } = this.state;

    console.log({ currentPlayer, tileBag, possiblePlayers });

    return (
      <ThemeProvider>
        <div>
          {!playerCount && (
            <div>
              <p>How many players are there?</p>
              <Select
                data={this.possiblePlayers}
                onChange={handleChange}
                placeholder="Choose a number"
                required
              />
            </div>
          )}
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
