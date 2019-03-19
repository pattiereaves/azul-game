import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';

export default class FactoryDisplay extends PureComponent {
  static propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleTileSelection: PropTypes.func.isRequired,
    displayID: PropTypes.number.isRequired,
  };

  state = {
    selectedTile: false,
  };

  handleSelection = (selectedTile) => {
    this.setState({ selectedTile });
  }

  // @todo create a function in the parent
  // onclick adds selected tiles to player's mat.
  // puts unselected tiles into center mat.

  render() {
    const { handleSelection } = this;
    const { tiles, handleTileSelection, displayID } = this.props;
    const { selectedTile } = this.state;
    return (
      <div>
        {tiles.map(tile => (
          <Button
            onClick={() => handleSelection(tile)}
            primary={tile === selectedTile}
          >
            {tile}
          </Button>
        ))}
        {selectedTile !== false && (
          <Button onClick={() => handleTileSelection(displayID, selectedTile)}>
            Select all
            {' '}
            {selectedTile}
            s?
          </Button>
        )}
      </div>
    );
  }
}
