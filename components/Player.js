import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconCheck from 'mineral-ui-icons/IconCheck';
import Button from 'mineral-ui/Button';
import PatternLines from './PatternLines';

export default class Player extends PureComponent {
  static propTypes = {
    isCurrentPlayer: PropTypes.bool.isRequired,
    playerID: PropTypes.number.isRequired,
    data: PropTypes.shape({
      tilesToPlace: PropTypes.arrayOf(PropTypes.number).isRequired,
      score: PropTypes.number.isRequired,
      willBeFirstNextRound: PropTypes.bool.isRequired,
      patternLines: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.number])),
      ).isRequired,
      floorLine: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
    assignTilesToPatternLines: PropTypes.func.isRequired,
  };

  render() {
    const {
      isCurrentPlayer, playerID, data, assignTilesToPatternLines,
    } = this.props;
    const { tilesToPlace, patternLines: lines, floorLine } = data;

    return (
      <div>
        {isCurrentPlayer && <IconCheck title="This is the current player" />}
        Player
        {' '}
        {playerID}
        {tilesToPlace.map(tile => <Button>{tile}</Button>)}
        <PatternLines
          lines={lines}
          tilesToPlace={tilesToPlace}
          assignTilesToPatternLines={assignTilesToPatternLines}
          playerID={playerID}
        />
        {floorLine && (
          <div>
            <h3>Floor line:</h3>
            <ul>
              {floorLine.map(tile => (<Button warning>{tile}</Button>))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
