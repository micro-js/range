
# range

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Generate a range of numbers with a given (optional) step size

## Installation

    $ npm install @f/range

## Usage

```js
var range = require('@f/range')


range(4)        // -> [0, 1, 2, 3]
range(1, 4)     // -> [1, 2, 3]
range(4, 1, -1) // -> [4, 3, 2]
```

## API

### range(start, end, step)

- `start` - Start of the sequence. If you pass only one argument, this is taken as the end, and the implied start is `0`.
- `end` - End of the sequence.
- `step` - Step size. Optional, defaults to 1.

**Returns:** An array of the range of values between `start` and `end`, in increments of `step` size.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/range.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/range
[git-image]: https://img.shields.io/github/tag/micro-js/range.svg?style=flat-square
[git-url]: https://github.com/micro-js/range
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/range.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/range
