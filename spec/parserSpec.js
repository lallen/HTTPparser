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
	
	it ('has case test', function() {
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
	
	it ('sets content-type headers', function() {

		//arrange
		const request = 'GET / HTTP/1.1\ncontent-type: text/HTML; charset = utf-8'
		
		//act
		const output = parseHttp(request)

	        //assert
		const expected = {
			verb: 'GET',
			path: '/',
			version: 'HTTP/1.1',
			headers: {
				'content type': 'text/HTML'
			}}
	})
	
	it ('handles multiple headers', function() {

		//arrange
		const request = 'GET / HTTP/1.1\ncontent-type: text/HTML; charset = utf-8'
		
		//act
		const output = parseHttp(request)

	        //assert
		const expected = {
			verb: 'GET',
			path: '/',
			version: 'HTTP/1.1',
			headers: {
				'content type': 'text/HTML'
			//	'Accept': 'text/HTML'
			}}
	})

})
