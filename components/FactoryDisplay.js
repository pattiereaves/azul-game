import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';

export default class FactoryDisplay extends PureComponent {
  propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  state = {
    selectedType: false,
  };

  handleSelection = (selectedType) => {
    this.setState({ selectedType });
  }

  render() {
    const { handleSelection } = this;
    const { tiles } = this.props;
    const { selectedType } = this.state;
    return (
      <div>
        {tiles.map(tile => (
          <Button
            onClick={() => handleSelection(tile)}
            primary={tile === selectedType}
          >
            {tile}
          </Button>
        ))}
        {selectedType !== false && (
          <Button>
            Select all
            {' '}
            {selectedType}
            s?
          </Button>
        )}
      </div>
    );
  }
}
