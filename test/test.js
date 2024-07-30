let test = require('ava');
let kedatest = require('../index.js');

test('foo', t => {
  t.is(kedatest.foo(10), 15);
});

