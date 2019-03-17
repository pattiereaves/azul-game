import { PureComponent } from 'react';

export default class Player extends PureComponent {
  state = {
    score: 0,
    hasCurrentTurn: false,
  };

  render() {
    const { score, hasCurrentTurn } = this.state;

    return (
      <div>
this is a player.
        {score}
        {' '}
        {hasCurrentTurn}
      </div>
    );
  }
}
