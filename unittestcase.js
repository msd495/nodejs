

var chai = require('chai');
var expect = chai.expect;

chai.should();

function returnsName(name){
	return name;
}

describe('1st unit test ',function(){
	it('returns name passed to the function',function(){

		returnsName('Ayush').should.equal('Ayush');

	});

});

//Download mocha and write mocha unittestcase.js

/*
request(app).get("/")
.expect(200)
.expect(/Hello fine user/,done)
*/