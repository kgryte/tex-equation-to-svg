'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@kgryte/noop' );
var tex2svg = require( './../lib/tex2svg.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof tex2svg, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a callback argument which is not a function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		true,
		undefined,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tex2svg( 'y = mx+b', value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		true,
		undefined,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tex2svg( 'y = mx+b', {}, value );
		};
	}
});

tape( 'the function throws an error if not provided an input string (no options)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		NaN,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tex2svg( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided an input string (options)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		NaN,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tex2svg( value, {}, noop );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		true,
		undefined,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tex2svg( 'y = mx+b', value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws type error' );
	t.end();

	function foo() {
		tex2svg( 'y = mx+b', {'ex':null}, noop );
	}
});

tape( 'the function returns any errors to the provided callback', function test( t ) {
	// non-existent LaTeX command...
	tex2svg( '\\infinity', clbk );

	function clbk( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function converts an input string to an SVG', function test( t ) {
	tex2svg( 'y = mx + b', clbk );

	function clbk( error, svg ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( typeof svg, 'string', 'returns a string' );
		t.end();
	}
});

tape( 'the function converts an input string to an SVG (options)', function test( t ) {
	var opts = {
		'width': 200,
		'ex': 2,
		'inline': true,
		'linebreaks': false
	};
	tex2svg( 'y = mx + b', opts, clbk );

	function clbk( error, svg ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( typeof svg, 'string', 'returns a string' );
		t.equal( svg.substring( 0, 4 ), '<svg', 'svg tag' );
		t.end();
	}
});
