'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );
var isString = require( 'validate.io-string-primitive' );
var copy = require( 'utils-copy' );
var mathjax = require( 'mathjax-node' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// FACTORY //

/**
* FUNCTION: factory( options, clbk )
*	Returns a function for converting a TeX or LaTeX string to an SVG.
*
* @param {Object} options - function options
* @param {Number} [options.width=100] - container width in `ex`
* @param {Number} [options.ex=6] - `ex` size in pixels
* @param {Boolean} [options.inline=false] - specifies whether to format the input string as an inline equation
* @param {Boolean} [options.linebreaks=true] - enable linebreaking
* @param {Function} clbk - callback to invoke upon converting a string to an SVG
* @returns {Function} function to convert a string to an SVG 
*/
function factory( options, clbk ) {
	var opts;
	var err;
	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	if ( opts.inline === true ) {
		opts.format = 'inline-TeX';
	}
	delete opts.inline;
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
		opts.math = str;
		mathjax.typeset( opts, done );
		/**
		* FUNCTION: done( data )
		*	Callback invoked upon converting a string to SVG.
		*
		* @private
		* @param {Object} data - output
		* @returns {Void}
		*/
		function done( data ) {
			var err;
			if ( data.errors ) {
				err = new Error( data.errors );
				return clbk( err );
			}
			clbk( null, data.svg );
		} // end FUNCTION done()
	}; // end FUNCTION tex2svg()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;