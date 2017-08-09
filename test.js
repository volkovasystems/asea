"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "asea",
			"path": "asea/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/asea.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"asea": "asea"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const asea = require( "./asea.js" );
//: @end-server






//: @server:
describe( "asea", ( ) => {

	describe( "`asea( ).toString( )`", ( ) => {

		it( "should be equal to 'Symbol(server)'", ( ) => {

			assert.equal( asea( ).toString( ), "Symbol(server)" );

		} );

	} );

	describe( "`asea.SERVER`", ( ) => {

		it( "should be true", ( ) => {

			assert.strictEqual( asea.SERVER, true );

		} );

	} );

	describe( "`asea.CLIENT`", ( ) => {

		it( "should be false", ( ) => {

			assert.strictEqual( asea.CLIENT, false );

		} );

	} );

	describe( "`asea.UNSUPPORTED`", ( ) => {

		it( "should be false", ( ) => {

			assert.strictEqual( asea.UNSUPPORTED, false );

		} );

	} );

} );
//: @end-server






