const { createNews, getallNews } = require("../controllers/news.controller");

module.exports = function (router) {
	router.post("/api/v1/news", createNews);
	router.get("/api/v1/news", getallNews);
}