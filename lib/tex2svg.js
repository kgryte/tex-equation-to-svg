'use strict';

// MODULES //

var factory = require( './factory.js' );


// TEX2SVG //

/**
* FUNCTION: tex2svg( str[, options], clbk )
*	Converts a TeX or LaTeX string to an SVG.
*
* @param {String} str - string to convert 
* @param {Object} [options] - function options 
* @param {Number} [options.width=100] - container width in `ex`
* @param {Number} [options.ex=6] - `ex` size in pixels
* @param {Boolean} [options.inline=false] - specifies whether to format the input string as an inline equation
* @param {Boolean} [options.linebreaks=true] - enable linebreaking
* @param {Function} clbk - callback to invoke once finished
* @returns {Void}
*/
function tex2svg( str, options, clbk ) {
	if ( arguments.length === 2 ) {
		// Assume that `options` is a callback argument...
		return factory( {}, options )( str );
	}
	factory( options, clbk )( str );
} // end FUNCTION tex2svg()


// EXPORTS //

module.exports = tex2svg;