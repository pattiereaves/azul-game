import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FactoryDisplay from './FactoryDisplay';

export default class FactoryDisplays extends PureComponent {
  propTypes = {
    count: PropTypes.number.isRequired,
  };

  render() {
    const { count } = this.props;
    const displays = Array(count).fill(<FactoryDisplay />);

    return (
      <div>
        <h2>Factory displays</h2>
        {displays.map(display => (display))}
      </div>
    );
  }
}
