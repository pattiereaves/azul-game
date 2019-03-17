import { PureComponent } from 'react';

export default class Player extends PureComponent {
  state = {
    score: 0,
    hasCurrentTurn: false,
  };

  render() {
    return (
      <div>this is a player.</div>
    );
  }
}
