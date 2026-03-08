const { Testimonial } = require("../models/models")

async function createTestimonial(req, res) {
	try {
		const testimonial = await Testimonial.create({
			text: req.fields.text,
			name: req.fields.name
		});
		res.json(testimonial);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

async function getAllTestimonials(req, res) {
	try {
		const testimonials = await Testimonial.findAll();
		res.json(testimonials);
	} catch (error) {
		console.error(error);
		response.status(500).end();
	}
}

module.exports = {
	createTestimonial,
	getAllTestimonials
}