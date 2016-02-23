'use strict';

// MODULES //

var tape = require( 'tape' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof factory, 'function', 'main export is a function' );
	t.end();
});
