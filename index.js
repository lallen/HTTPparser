module.exports = function parseHttp(request) {

	const parsedMessage = {
	}

	const lines = request.split('/n')

	let parts  = lines[0].split('')
	 parsedMessage.verb = parts[0].toUpperCase()
	 parsedMessage.path = parts[1].toUpperCase()
	 parsedMessage.version = parts[2].toUpperCase()
	
	if (lines[1] === undefined){
	return parsedMessage
	}

	parsedMessage.headers = {}
	parts = lines[1].split(': ')

	for (i = 1; i < lines.length(); i++){ 
	const key = parts[0]
	const value = parts[1]
	parsedMessage.headers[key] = value
	}

	return parsedMessage

}
