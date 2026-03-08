const { createNewsletterSignup, getAllNewsletterSignups } = require("../controllers/newsletter.contorller");

module.exports = function (router) {
	router.post("/api/v1/newsletter", createNewsletterSignup);
	router.get("/api/v1/newsletter", getAllNewsletterSignups);
};