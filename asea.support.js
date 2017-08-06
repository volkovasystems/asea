"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "asea",
              			"path": "asea/asea.js",
              			"file": "asea.js",
              			"module": "asea",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com:volkovasystems/asea.git",
              			"test": "asea-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Determines if you're on a server environment or a client environment.
              
              		Returns unsupported if the environment cannot be determined.
              	@end-module-documentation
              
              	@include:
              		{
              			"harden": "harden"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var harden = require("harden");

harden("CLIENT", (0, _symbol2.default)("client"));
harden("SERVER", (0, _symbol2.default)("server"));
harden("UNSUPPORTED", (0, _symbol2.default)("unsupported"));

var asea = function asea() {
	if (asea.CLIENT) {
		return CLIENT;

	} else if (asea.SERVER) {
		return SERVER;

	} else {
		return UNSUPPORTED;
	}
};

harden("CLIENT",
typeof window != "undefined" &&
typeof document != "undefined" &&
typeof window.constructor == "function" &&
typeof document.constructor == "function" &&
window.constructor.name == "Window" &&
document.constructor.name == "HTMLDocument",
asea);

harden("SERVER",
typeof module != "undefined" &&
typeof global != "undefined" &&
!!module.exports &&
!!global.process &&
!!global.process.env,
asea);

harden("UNSUPPORTED",
asea.CLIENT === false &&
asea.SERVER === false,
asea);

module.exports = asea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzZWEuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwiYXNlYSIsIkNMSUVOVCIsIlNFUlZFUiIsIlVOU1VQUE9SVEVEIiwid2luZG93IiwiZG9jdW1lbnQiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtb2R1bGUiLCJnbG9iYWwiLCJleHBvcnRzIiwicHJvY2VzcyIsImVudiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7O0FBRUFELE9BQVEsUUFBUixFQUFrQixzQkFBUSxRQUFSLENBQWxCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixzQkFBUSxRQUFSLENBQWxCO0FBQ0FBLE9BQVEsYUFBUixFQUF1QixzQkFBUSxhQUFSLENBQXZCOztBQUVBLElBQU1FLE9BQU8sU0FBU0EsSUFBVCxHQUFnQjtBQUM1QixLQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2hCLFNBQU9BLE1BQVA7O0FBRUEsRUFIRCxNQUdNLElBQUlELEtBQUtFLE1BQVQsRUFBaUI7QUFDdEIsU0FBT0EsTUFBUDs7QUFFQSxFQUhLLE1BR0Q7QUFDSixTQUFPQyxXQUFQO0FBQ0E7QUFDRCxDQVZEOztBQVlBTCxPQUFRLFFBQVI7QUFDQyxPQUFPTSxNQUFQLElBQWlCLFdBQWpCO0FBQ0EsT0FBT0MsUUFBUCxJQUFtQixXQURuQjtBQUVBLE9BQU9ELE9BQU9FLFdBQWQsSUFBNkIsVUFGN0I7QUFHQSxPQUFPRCxTQUFTQyxXQUFoQixJQUErQixVQUgvQjtBQUlBRixPQUFPRSxXQUFQLENBQW1CQyxJQUFuQixJQUEyQixRQUozQjtBQUtBRixTQUFTQyxXQUFULENBQXFCQyxJQUFyQixJQUE2QixjQU45QjtBQU9HUCxJQVBIOztBQVNBRixPQUFRLFFBQVI7QUFDQyxPQUFPVSxNQUFQLElBQWlCLFdBQWpCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQixXQURqQjtBQUVBLENBQUMsQ0FBQ0QsT0FBT0UsT0FGVDtBQUdBLENBQUMsQ0FBQ0QsT0FBT0UsT0FIVDtBQUlBLENBQUMsQ0FBQ0YsT0FBT0UsT0FBUCxDQUFlQyxHQUxsQjtBQU1HWixJQU5IOztBQVFBRixPQUFRLGFBQVI7QUFDQ0UsS0FBS0MsTUFBTCxLQUFnQixLQUFoQjtBQUNBRCxLQUFLRSxNQUFMLEtBQWdCLEtBRmpCO0FBR0dGLElBSEg7O0FBS0FRLE9BQU9FLE9BQVAsR0FBaUJWLElBQWpCIiwiZmlsZSI6ImFzZWEuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJhc2VhXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImFzZWEvYXNlYS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJhc2VhLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwiYXNlYVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbTp2b2xrb3Zhc3lzdGVtcy9hc2VhLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJhc2VhLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RGV0ZXJtaW5lcyBpZiB5b3UncmUgb24gYSBzZXJ2ZXIgZW52aXJvbm1lbnQgb3IgYSBjbGllbnQgZW52aXJvbm1lbnQuXHJcblxyXG5cdFx0UmV0dXJucyB1bnN1cHBvcnRlZCBpZiB0aGUgZW52aXJvbm1lbnQgY2Fubm90IGJlIGRldGVybWluZWQuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xyXG5cclxuaGFyZGVuKCBcIkNMSUVOVFwiLCBTeW1ib2woIFwiY2xpZW50XCIgKSApO1xyXG5oYXJkZW4oIFwiU0VSVkVSXCIsIFN5bWJvbCggXCJzZXJ2ZXJcIiApICk7XHJcbmhhcmRlbiggXCJVTlNVUFBPUlRFRFwiLCBTeW1ib2woIFwidW5zdXBwb3J0ZWRcIiApICk7XHJcblxyXG5jb25zdCBhc2VhID0gZnVuY3Rpb24gYXNlYSggKXtcclxuXHRpZiggYXNlYS5DTElFTlQgKXtcclxuXHRcdHJldHVybiBDTElFTlQ7XHJcblxyXG5cdH1lbHNlIGlmKCBhc2VhLlNFUlZFUiApe1xyXG5cdFx0cmV0dXJuIFNFUlZFUjtcclxuXHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gVU5TVVBQT1JURUQ7XHJcblx0fVxyXG59O1xyXG5cclxuaGFyZGVuKCBcIkNMSUVOVFwiLCAoXHJcblx0dHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiICYmXHJcblx0dHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiZcclxuXHR0eXBlb2Ygd2luZG93LmNvbnN0cnVjdG9yID09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdHR5cGVvZiBkb2N1bWVudC5jb25zdHJ1Y3RvciA9PSBcImZ1bmN0aW9uXCIgJiZcclxuXHR3aW5kb3cuY29uc3RydWN0b3IubmFtZSA9PSBcIldpbmRvd1wiICYmXHJcblx0ZG9jdW1lbnQuY29uc3RydWN0b3IubmFtZSA9PSBcIkhUTUxEb2N1bWVudFwiXHJcbiksIGFzZWEgKTtcclxuXHJcbmhhcmRlbiggXCJTRVJWRVJcIiwgKFxyXG5cdHR5cGVvZiBtb2R1bGUgIT0gXCJ1bmRlZmluZWRcIiAmJlxyXG5cdHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiAmJlxyXG5cdCEhbW9kdWxlLmV4cG9ydHMgJiZcclxuXHQhIWdsb2JhbC5wcm9jZXNzICYmXHJcblx0ISFnbG9iYWwucHJvY2Vzcy5lbnZcclxuKSwgYXNlYSApO1xyXG5cclxuaGFyZGVuKCBcIlVOU1VQUE9SVEVEXCIsIChcclxuXHRhc2VhLkNMSUVOVCA9PT0gZmFsc2UgJiZcclxuXHRhc2VhLlNFUlZFUiA9PT0gZmFsc2VcclxuKSwgYXNlYSApO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhc2VhO1xyXG4iXX0=
//# sourceMappingURL=asea.support.js.map
