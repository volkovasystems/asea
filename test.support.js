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

var assert=require("should");



//: @client:
var asea=require("./asea.support.js");
//: @end-client







//: @client:
describe("asea",function(){

describe("`asea( ).toString( )`",function(){

it("should be equal to 'Symbol(client)'",function(){

assert.equal(asea().toString(),"Symbol(client)");

});

});

describe("`asea.SERVER`",function(){

it("should be false",function(){

assert.strictEqual(asea.SERVER,false);

});

});

describe("`asea.CLIENT`",function(){

it("should be true",function(){

assert.strictEqual(asea.CLIENT,true);

});

});

describe("`asea.UNSUPPORTED`",function(){

it("should be false",function(){

assert.strictEqual(asea.UNSUPPORTED,false);

});

});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYXNlYSIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInRvU3RyaW5nIiwic3RyaWN0RXF1YWwiLCJTRVJWRVIiLCJDTElFTlQiLCJVTlNVUFBPUlRFRCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsR0FBTUEsUUFBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLEdBQU1DLE1BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0FFLFNBQVUsTUFBVixDQUFrQixVQUFPOztBQUV4QkEsU0FBVSx1QkFBVixDQUFtQyxVQUFPOztBQUV6Q0MsR0FBSSxxQ0FBSixDQUEyQyxVQUFPOztBQUVqREosT0FBT0ssS0FBUCxDQUFjSCxPQUFRSSxRQUFSLEVBQWQsQ0FBbUMsZ0JBQW5DOztBQUVBLENBSkQ7O0FBTUEsQ0FSRDs7QUFVQUgsU0FBVSxlQUFWLENBQTJCLFVBQU87O0FBRWpDQyxHQUFJLGlCQUFKLENBQXVCLFVBQU87O0FBRTdCSixPQUFPTyxXQUFQLENBQW9CTCxLQUFLTSxNQUF6QixDQUFpQyxLQUFqQzs7QUFFQSxDQUpEOztBQU1BLENBUkQ7O0FBVUFMLFNBQVUsZUFBVixDQUEyQixVQUFPOztBQUVqQ0MsR0FBSSxnQkFBSixDQUFzQixVQUFPOztBQUU1QkosT0FBT08sV0FBUCxDQUFvQkwsS0FBS08sTUFBekIsQ0FBaUMsSUFBakM7O0FBRUEsQ0FKRDs7QUFNQSxDQVJEOztBQVVBTixTQUFVLG9CQUFWLENBQWdDLFVBQU87O0FBRXRDQyxHQUFJLGlCQUFKLENBQXVCLFVBQU87O0FBRTdCSixPQUFPTyxXQUFQLENBQW9CTCxLQUFLUSxXQUF6QixDQUFzQyxLQUF0Qzs7QUFFQSxDQUpEOztBQU1BLENBUkQ7O0FBVUEsQ0ExQ0Q7QUEyQ0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJhc2VhXCIsXG5cdFx0XHRcInBhdGhcIjogXCJhc2VhL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9hc2VhLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiLi9hc2VhLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwiYXNlYVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBhc2VhKCApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdTeW1ib2woY2xpZW50KSdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBhc2VhKCApLnRvU3RyaW5nKCApLCBcIlN5bWJvbChjbGllbnQpXCIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFzZWEuU0VSVkVSYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIGJlIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbCggYXNlYS5TRVJWRVIsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBhc2VhLkNMSUVOVGBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5zdHJpY3RFcXVhbCggYXNlYS5DTElFTlQsIHRydWUgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGFzZWEuVU5TVVBQT1JURURgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgYmUgZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LnN0cmljdEVxdWFsKCBhc2VhLlVOU1VQUE9SVEVELCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
