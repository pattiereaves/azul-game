import shuffle from 'shuffle-array';

export default () => shuffle(
  Array(5)
    .fill(0)
    .reduce(
      (acc, cv, index) => ([...acc, ...Array(20).fill(index)]),
      [],
    ),
);
