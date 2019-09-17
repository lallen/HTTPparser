const parseHttp = require('../index.js')

describe('parse http', function() {

	it ('parses a request line', function() {
		//arrange
		const request = 'GET / HTTP/1.1'
		
		//act
		const output = parseHttp(request)
		
		//assert
		const expected = {
			verb: 'GET',
			path: '/',
			version: 'HTTP/1.1'
		}

	})
	
	it ('has case correction', function() {
		//arrange
		const request = 'get / HTTP/1.1'
		
		//act
		const output = parseHttp(request)
		
		//assert
		const expected = {
			verb: 'GET',
			path: '/',
			version: 'HTTP/1.1'
		}

	})
	
	it ('makes an other test', function() {
		//arrange
		const request = 'GET / HTTP/1.1'
		
		//act
		const output = parseHttp(request)
		
		//assert
		const expected = {
			verb: 'GET',
			path: '/',
			version: 'HTTP/1.1'
		}

	})





})

