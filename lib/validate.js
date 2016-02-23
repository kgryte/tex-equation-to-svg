'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object 
* @param {Object} options - options to validate
* @returns {Error|Null} error object or null 
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;