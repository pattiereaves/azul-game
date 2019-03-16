import { Component } from 'react';
import localStorage from 'local-storage';
import { ThemeProvider } from 'mineral-ui/themes';
import Select from 'mineral-ui/Select';
import Player from '../components/Player';

export default class Index extends Component {
  state = {
    playerCount: false,
    currentPlayer: 0,
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

  handleChange = ({ value }) => {
    const playerCount = Number(value);
    this.setState({ playerCount: playerCount });
    localStorage('playerCount', playerCount );
  };

  hydrateStateWithLocalStorage = () => {
    const { state } = this;

    Object.keys(state).forEach((key) => {
      let value = localStorage.get(key);

      if (! value) {
        return;
      }

      this.setState({ [key]: JSON.parse(value) });
    })
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  render() {
    const { possiblePlayers, handleChange } = this;
    const { playerCount } = this.state;

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
