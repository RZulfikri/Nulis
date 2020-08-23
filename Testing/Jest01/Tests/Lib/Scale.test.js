import Scale from '../../App/Transforms/Scale';
import R from 'ramda';

test('Test Scale Function', () => {
  const scale = Scale(10);
  expect(R.equals(scale, 20)).toBe(true);
  expect(R.equals(scale, 10)).toBe(false);
});
