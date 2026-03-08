const { Message } = require("../models/models.js");

async function createMessage(request, response) {
	try {
		const message = await Message.create({
			name: request.fields.name,
			email: request.fields.email,
			message: request.fields.message
		});
		response.json({ message });
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

async function getAllMessages(request, response) {
	try {
		const messages = await Message.findAll();
		response.json(messages);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

module.exports = {
	createMessage,
	getAllMessages
}