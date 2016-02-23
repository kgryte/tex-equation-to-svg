'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isPositiveInteger = require( 'validate.io-positive-integer' );
var isBoolean = require( 'validate.io-boolean-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object 
* @param {Object} options - options to validate
* @param {Number} [options.width] - container width in `ex`
* @param {Number} [options.ex] - `ex` size in pixels
* @param {Boolean} [options.inline] - specifies whether to format the input string as an inline equation
* @param {Boolean} [options.linebreaks] - enable linebreaking
* @returns {Error|Null} error object or null 
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'width' ) ) {
		opts.width = options.width;
		if ( !isPositiveInteger( opts.width ) ) {
			return new TypeError( 'invalid option. `width` option must be a positive integer. Option: `' + opts.width + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'ex' ) ) {
		opts.ex = options.ex;
		if ( !isPositiveInteger( opts.ex ) ) {
			return new TypeError( 'invalid option. `ex` option must be a positive integer. Option: `' + opts.ex + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'inline' ) ) {
		opts.inline = options.inline;
		if ( !isBoolean( opts.inline ) ) {
			return new TypeError( 'invalid option. `inline` option must be a boolean primitive. Option: `' + opts.inline + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'linebreaks' ) ) {
		opts.linebreaks = options.linebreaks;
		if ( !isBoolean( opts.linebreaks ) ) {
			return new TypeError( 'invalid option. `linebreaks` option must be a boolean primitive. Option: `' + opts.linebreaks + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;