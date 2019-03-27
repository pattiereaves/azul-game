import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';

export default class Center extends PureComponent {
  static propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleTileSelection: PropTypes.func.isRequired,
    showTileSelectionButton: PropTypes.bool.isRequired,
  };

  state = {
    selectedTile: false,
  };

  handleSelection = (selectedTile) => {
    this.setState({ selectedTile });
  }

  handleTileSelectionInternally = () => {
    const { handleTileSelection } = this.props;
    const { selectedTile } = this.state;
    handleTileSelection(false, selectedTile);
    this.setState({ selectedTile: false });
  }

  render() {
    const { tiles, showTileSelectionButton } = this.props;
    const { selectedTile } = this.state;
    const { handleSelection, handleTileSelectionInternally } = this;

    return (
      <div>
        <h2>Center</h2>
        <ul>
          {tiles.map((tile, index) => {
            const key = index;
            return (
              <li key={key}>
                <Button
                  onClick={() => handleSelection(tile)}
                  primary={tile === selectedTile}
                >
                  {tile}
                </Button>
              </li>
            );
          })}
        </ul>
        {showTileSelectionButton && selectedTile !== false && (
          <Button onClick={() => handleTileSelectionInternally(selectedTile)}>
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
