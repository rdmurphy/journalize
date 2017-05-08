import * as journalize from './';

it('should export all the functions', () => {
  const expectedProperties = [
    'apnumber',
    'apstate',
    'intcomma',
    'intword',
    'ordinal',
    'postal'
  ];
  const properties = Object.keys(journalize);

  expect(properties).toEqual(expect.arrayContaining(expectedProperties));
});
