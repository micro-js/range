/**
 * Expose range
 */

module.exports = range

/**
 * range
 */

function range (begin, end, step) {
  if (arguments.length === 1) {
    end = begin
    begin = 0
  }

  if (arguments.length < 3) {
    step = 1
  }

  var result = []

  if (step > 0) {
    for (var i = begin; i < end; i += step) {
      result.push(i)
    }
  } else {
    for (var i = begin; i > end; i += step) {
      result.push(i)
    }
  }

  return result
}
