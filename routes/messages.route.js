const { getAllMessages, createMessage } = require("../controllers/message.controller.js");

module.exports = function (router) {
	router.get("/api/v1/messages", getAllMessages);
	router.post("/api/v1/messages", createMessage);
};