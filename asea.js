"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "asea",
			"path": "asea/asea.js",
			"file": "asea.js",
			"module": "asea",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com:volkovasystems/asea.git",
			"test": "asea-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Determines if you're on a server environment or a client environment.

		Returns unknown if the environment cannot be determined.
	@end-module-documentation

	@include:
		{
			"harden": "harden"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var harden = require( "harden" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

harden( "CLIENT", "client" );
harden( "SERVER", "server" );
harden( "UNKNOWN", "unknown" );

var asea = function asea( ){
	if( asea.client ){
		return CLIENT;

	}else if( asea.server ){
		return SERVER;

	}else{
		return UNKNOWN;
	}
};

harden( "client",
	( typeof window != "undefined" &&
	typeof document != "undefined" &&
	typeof window.constructor == "function" &&
	typeof document.constructor == "function" &&
	window.constructor.name == "Window" &&
	document.constructor.name == "HTMLDocument" ),
	asea );

harden( "server",
	( typeof module != "undefined" &&
	typeof global != "undefined" &&
	!!module.exports &&
	!!global.process &&
	!!global.process.env ),
	asea );

harden( "unknown",
	( asea.client === false &&
	asea.server === false ),
	asea );

if( asea.server ){
	module.exports = asea;
}
