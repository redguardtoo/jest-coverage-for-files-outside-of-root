const mylib = require('./mylib');
// const util = require('../share/util');
const util = require('../share/util');

test('Test 1', () => {
  mylib.hello();
  util.bye();
  expect(true).toBe(true);
});
