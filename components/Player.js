import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconCheck from 'mineral-ui-icons/IconCheck';
import Button from 'mineral-ui/Button';
import ButtonGroup from 'mineral-ui/ButtonGroup';
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

    // Need to be able to assign tiles straight to the floor line

    return (
      <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
        <h2 style={{ flex: '1 0 100%' }}>
          {isCurrentPlayer && <IconCheck title="Current player" />}
          Player
          {' '}
          {playerID}
        </h2>
        <div style={{ flex: '1 0 100%' }}>
          {tilesToPlace.map(tile => <Button>{tile}</Button>)}
        </div>
        <div style={{ flex: '0 1 50%', minWidth: '250px' }}>
          <h3 style={{ flex: '1 0 100%' }}>
            Tiles to place
          </h3>
          <PatternLines
            lines={lines}
            tilesToPlace={tilesToPlace}
            assignTilesToPatternLines={assignTilesToPatternLines}
            playerID={playerID}
            readyToAssignToWalls={readyToAssignToWalls}
          />
          {floorLine && (
            <div>
              <h3>Floor line:</h3>
              <ButtonGroup>
                {floorLine.map(tile => (<Button warning>{tile}</Button>))}
              </ButtonGroup>
            </div>
          )}
        </div>
        <div style={{ flex: '0 1 50%', minWidth: '250px' }}>
          <Wall data={wall} />
        </div>
      </div>
    );
  }
}
