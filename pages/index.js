import { Component } from 'react';
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
    this.setState({ playerCount: Number(value) });
  }

  render = () => {
    const { possiblePlayers, handleChange } = this;
    const { playerCount } = this.state;

    return (
      <ThemeProvider>
        <div>
          {/* ! playerCount && */ true && (
            <div>
              <p>How many players are there?</p>
              <Select
                data={this.possiblePlayers}
                defaultSelectedItem={possiblePlayers[0]}
                required
                onChange={handleChange}
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
