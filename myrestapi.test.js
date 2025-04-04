const restapi = require('./myrestapi.js')

describe('test hr zone calculation', () => {
  test('test - zone number is correct?', () => {
    expect(restapi.calculateHR(30,180).zone).toBe(5);
  });
});