import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconCheck from 'mineral-ui-icons/IconCheck';
import Button from 'mineral-ui/Button';
import PatternLines from './PatternLines';
import Wall from './Wall';

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
    readyToAssignToWalls: PropTypes.bool.isRequired,
  };

  render() {
    const {
      isCurrentPlayer,
      playerID,
      data,
      assignTilesToPatternLines,
      readyToAssignToWalls,
    } = this.props;
    const {
      tilesToPlace, patternLines: lines, floorLine, wall,
    } = data;

    // Ready to assign to walls when variable is active and lines are full.
    // Needs to do it in the patternlines component.

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
          readyToAssignToWalls={readyToAssignToWalls}
        />
        <Wall data={wall} />
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
