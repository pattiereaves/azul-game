import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconCheck from 'mineral-ui-icons/IconCheck';
import Button from 'mineral-ui/Button';

export default class Player extends PureComponent {
  propTypes = {
    isCurrentPlayer: PropTypes.bool.isRequired,
    handleTurnEnd: PropTypes.func.isRequired,
    playerID: PropTypes.number.isRequired,
  };

  render() {
    const { isCurrentPlayer, handleTurnEnd, playerID } = this.props;

    return (
      <div>
        {isCurrentPlayer && <IconCheck title="This is the current player" />}
        this is a player.
        {isCurrentPlayer && (<Button onClick={() => handleTurnEnd(playerID)}>End turn</Button>)}
      </div>
    );
  }
}
