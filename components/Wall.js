import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'mineral-ui/Button';
import ButtonGroup from 'mineral-ui/ButtonGroup';

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
            <li style={{ listStyleType: 'none' }}>
              <ButtonGroup>
                {line.map(({ type, isFilled }) => (
                  <Button disabled={!isFilled}>{type}</Button>
                ))}
              </ButtonGroup>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
