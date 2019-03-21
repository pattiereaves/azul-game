import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconCheck from 'mineral-ui-icons/IconCheck';
import Button from 'mineral-ui/Button';
import PatternLines from './PatternLines';

export default class Player extends PureComponent {
  static propTypes = {
    isCurrentPlayer: PropTypes.bool.isRequired,
    handleTurnEnd: PropTypes.func.isRequired,
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
  };

  // if there are tiles to place, show the floor lines.
  // a button for which pattern line to fill
  // if there are more tiles than pattern line, push the remaining to the floorLine
  // need option to send all tiles to the floorline
  // need to gray out pattern lines that aren't the same tile type
  // (button to place should only appear for legal moves)
  // after placing tiles on pattern line, move to next turn.
  // Create this logic in the index.js file.

  render() {
    const {
      isCurrentPlayer, handleTurnEnd, playerID, data,
    } = this.props;
    const { tilesToPlace, patternLines: lines } = data;

    return (
      <div>
        {isCurrentPlayer && <IconCheck title="This is the current player" />}
        Player
        {' '}
        {playerID}
        {isCurrentPlayer && (<Button onClick={() => handleTurnEnd(playerID)}>End turn</Button>)}
        {tilesToPlace.map(tile => <Button>{tile}</Button>)}
        <PatternLines lines={lines} tilesToPlace={tilesToPlace} />
      </div>
    );
  }
}
