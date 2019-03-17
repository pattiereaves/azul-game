import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FactoryDisplay extends PureComponent {
  propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  render() {
    const { tiles } = this.props;
    return (
      <div>
        {tiles.map(tile => (tile))}
      </div>
    );
  }
}
