import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';

export default class PatternLines extends PureComponent {
  static propTypes = {
    lines: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
    ).isRequired,
    tilesToPlace: PropTypes.arrayOf(PropTypes.number).isRequired,
    assignTilesToPatternLines: PropTypes.func.isRequired,
    playerID: PropTypes.number.isRequired,
  };

  /**
   * Determines whether or not player can place tiles at this time.
   *
   * @param  {array} line   The line which will stage the tiles.
   * @param  {array} tiles  Tiles to be placed.
   * @return {bool}         Whether or not tiles can be placed.
   */
  canPlaceTilesInThisRow = (line, tiles) => {
    // Are there tiles to place?
    if (tiles.length < 1) {
      return false;
    }

    // Is there any room in this row?
    const emptyPlaces = line.filter(place => place === false);
    if (emptyPlaces.length === 0) {
      return false;
    }

    // If this row is empty than anything can be placed here.
    if (emptyPlaces.length === line.length) {
      return true;
    }

    // Do the tiles that are already in this row match the tiles to be placed?
    const [tile] = tiles;
    const [linetype] = line;
    return tile === linetype;
  }

  render() {
    const {
      lines, tilesToPlace, assignTilesToPatternLines, playerID,
    } = this.props;
    const { canPlaceTilesInThisRow } = this;
    return (
      <ul>
        {lines.map((line, index) => (
          <li>
            {canPlaceTilesInThisRow(line, tilesToPlace) && (
              <Button
                primary
                onClick={() => assignTilesToPatternLines(playerID, index, tilesToPlace)}
              >
                Place tiles in this row
              </Button>
            )}
            <ul>
              {line.map(tile => (<li><Button>{tile}</Button></li>))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}
