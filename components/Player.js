import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconCheck from 'mineral-ui-icons/IconCheck';
import Button from 'mineral-ui/Button';

export default class Player extends PureComponent {
  static propTypes = {
    isCurrentPlayer: PropTypes.bool.isRequired,
    handleTurnEnd: PropTypes.func.isRequired,
    playerID: PropTypes.number.isRequired,
    data: PropTypes.shape({
      tilesToPlace: PropTypes.array.isRequired,
    }).isRequired,
  };

  render() {
    const {
      isCurrentPlayer, handleTurnEnd, playerID, data,
    } = this.props;
    const { tilesToPlace } = data;

    return (
      <div>
        {isCurrentPlayer && <IconCheck title="This is the current player" />}
        Player
        {' '}
        {playerID}
        {isCurrentPlayer && (<Button onClick={() => handleTurnEnd(playerID)}>End turn</Button>)}
        {tilesToPlace.map(tile => <Button>{tile}</Button>)}
      </div>
    );
  }
}
