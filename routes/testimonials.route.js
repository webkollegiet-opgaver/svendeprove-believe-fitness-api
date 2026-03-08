const { createTestimonial, getAllTestimonials } = require("../controllers/testimonial.contorller")

module.exports = function (router) {
	router.post("/api/v1/testimonials", createTestimonial);
	router.get("/api/v1/testimonials", getAllTestimonials);
}