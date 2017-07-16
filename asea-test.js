const assert = require( "assert" );
const asea = require( "./asea.js" );

assert.equal( asea( ).toString( ), "Symbol(server)", "should return 'Symbol(server)'" );

console.log( "ok" );
