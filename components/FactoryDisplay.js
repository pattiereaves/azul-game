import { PureComponent } from 'react';

export default class FactoryDisplay extends PureComponent {
  state = {
    tiles: [],
  };

  render() {
    const { tiles } = this.state;
    return (
      <div>
        {tiles.map(tile => (tile))}
      </div>
    );
  }
}
