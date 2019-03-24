import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';

export default class FactoryDisplay extends PureComponent {
  static propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleTileSelection: PropTypes.func.isRequired,
    displayID: PropTypes.number.isRequired,
    showTileSelectionButton: PropTypes.bool.isRequired,
  };

  state = {
    selectedTile: false,
  };

  handleSelection = (selectedTile) => {
    this.setState({ selectedTile });
  }

  render() {
    const { handleSelection } = this;
    const {
      tiles,
      handleTileSelection,
      displayID,
      showTileSelectionButton,
    } = this.props;
    const { selectedTile } = this.state;
    return (
      <div>
        {tiles.map((tile, index) => {
          const key = `${index}-${tile}`;
          return (
            <Button
              onClick={() => handleSelection(tile)}
              primary={tile === selectedTile}
              key={key}
            >
              {tile}
            </Button>
          );
        })}
        {showTileSelectionButton && selectedTile !== false && (
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
