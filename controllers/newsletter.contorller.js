const { Newsletter } = require("../models/models.js");

async function createNewsletterSignup(req, res) {
	try {
		const newsletter = await Newsletter.create({
			email: req.fields.email
		})
		res.json(newsletter);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

async function getAllNewsletterSignups(res, res) {
	try {
		const newsletters = await Newsletter.findAll();
		res.json(newsletters);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

module.exports = {
	createNewsletterSignup,
	getAllNewsletterSignups
};