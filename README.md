tex2svg
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Convert a TeX or LaTeX `string` to an SVG.


## Installation

``` bash
$ npm install tex-equation-to-svg
```


## Usage

``` javascript
var tex2svg = require( 'tex-equation-to-svg' );
```

#### tex2svg( str[, opts], clbk )

Converts a TeX or LaTeX `string` to an SVG.

``` javascript
var str = '';

tex2svg( str, clbk );

function clbk( error, svg ) {
	if ( error ) {
		throw error;
	}
	console.log( svg );
	/*

	*/
}
```


## Examples

``` javascript
var tex2svg = require( 'tex-equation-to-svg' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g tex-equation-to-svg
```


### Usage

``` bash

```


### Examples

``` bash
$
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/tex-equation-to-svg.svg
[npm-url]: https://npmjs.org/package/tex-equation-to-svg

[build-image]: http://img.shields.io/travis/kgryte/tex-equation-to-svg/master.svg
[build-url]: https://travis-ci.org/kgryte/tex-equation-to-svg

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/tex-equation-to-svg/master.svg
[coverage-url]: https://codecov.io/github/kgryte/tex-equation-to-svg?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/tex-equation-to-svg.svg
[dependencies-url]: https://david-dm.org/kgryte/tex-equation-to-svg

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/tex-equation-to-svg.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/tex-equation-to-svg

[github-issues-image]: http://img.shields.io/github/issues/kgryte/tex-equation-to-svg.svg
[github-issues-url]: https://github.com/kgryte/tex-equation-to-svg/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
