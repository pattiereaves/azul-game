import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';

export default class Wall extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.number.isRequired,
          isFilled: PropTypes.bool.isRequired,
        }),
      ),
    ).isRequired,
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <h3>Wall</h3>
        <ul>
          {data.map(line => (
            <li>
              <ul>
                {line.map(({ type, isFilled }) => (
                  <li><Button disabled={!isFilled}>{type}</Button></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
