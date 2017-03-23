/**
 * Imports
 */

var range = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(range(4), [0, 1, 2, 3])
  t.deepEqual(range(1, 4), [1, 2, 3])
  t.deepEqual(range(1, 10, 3), [1, 4, 7])
  t.deepEqual(range(10, 1, -2), [10, 8, 6, 4, 2])

  t.end()
})
