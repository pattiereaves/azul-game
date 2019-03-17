import { PureComponent } from 'react';

export default class Wall extends PureComponent {
  state = {
    row1: [false],
    row2: [false, false],
    row3: [false, false, false],
    row4: [false, false, false, false],
    row5: [false, false, false, false, false],
  };

  render() {
    return (
      <div>This is the wall.</div>
    );
  }
}
