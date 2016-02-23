'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );
var isString = require( 'validate.io-string-primitive' );


// FACTORY //

/**
* FUNCTION: factory( options, clbk )
*	Returns a function for converting a TeX or LaTeX string to an SVG.
*
* @param {Object} options - function options
* @param {Function} clbk - callback to invoke upon converting a string to an SVG
* @returns {Function} function to convert a string to an SVG 
*/
function factory( options, clbk ) {
	var opts;
	var err;

	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	/**
	* FUNCTION: tex2svg( str )
	*	Converts a TeX or LaTeX string to an SVG.
	*
	* @param {String} str - string to convert
	* @returns {Void}
	*/
	return function tex2svg( str ) {
		if ( !isString( str ) ) {
			throw new TypeError( 'invalid input argument. Must provide a string primitive. Value: `' + str + '`.' );
		}
	}; // end FUNCTION tex2svg()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;