const asea = require( "./asea.js" );
const assert = require( "assert" );

assert.equal( asea( ).toString( ), "Symbol(server)", "should return 'Symbol(server)'" );

console.log( "ok" );
