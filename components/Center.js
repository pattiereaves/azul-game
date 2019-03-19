import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Center extends PureComponent {
  static propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  render() {
    const { tiles } = this.props;
    return (
      <div>
        This is the center mat.
        {tiles.map(tile => (tile))}
      </div>
    );
  }
}
