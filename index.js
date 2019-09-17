module.exports = function parseHttp(request) {
	const parsedMessage = {
	}

	const parts  = request.split('')
	 parsedMessage.verb = parts[0].toUpperCase()
	 parsedMessage.path = parts[1].toUpperCase()
	 parsedMessage.version = parts[2].toUpperCase()
	return parsedMessage

}
