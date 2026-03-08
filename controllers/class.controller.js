var { Class, Trainer, Asset, User, Rating } = require("../models/models");

async function getSingleClass(req, res, next) {
	try {
		let classData = await Class.findByPk(parseInt(req.params.id), { include: [Trainer, Asset, User] });
		res.json(classData);
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}

async function getAllClasses(req, res, next) {
	try {
		let classData = await Class.findAll({ include: [Trainer, Asset] });
		res.json(classData);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function createSingleClass(req, res, next) {
	try {
		let classData = await Class.create({
			className: req.fields.className,
			classDescription: req.fields.classDescription,
			classDay: req.fields.classDay,
			classTime: req.fields.classTime,
			maxParticipants: req.fields.maxParticipants,
			trainerId: req.fields.trainerId,
			assetId: req.fields.assetId
		});
		res.json(classData);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function updateClass(req, res) {
	try {
		await Class.update({
			className: req.fields.className,
			classDescription: req.fields.classDescription,
			classDay: req.fields.classDay,
			classTime: req.fields.classTime,
			maxParticipants: req.fields.maxParticipants,
			trainerId: req.fields.trainerId,
			assetId: req.fields.assetId
		}, { where: { id: req.params.id } });
		const updatedClass = await Class.findByPk(req.params.id);
		res.json(updatedClass);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function deleteClass(req, res) {
	try {
		await Class.destroy({
			where: { id: req.params.id }
		});
		res.status(204).end();
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function getRatings(req, res, next) {
	try {
		let rating = await Rating.findAll({ where: { classId: req.params.id } });
		res.json(rating);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function saveRating(req, res, next) {
	try {
		let rating = await Rating.findAll({ where: { userId: req.fields.userId, classId: req.params.id } });
		if (rating.length) return res.status(405).end();

		let newRating = await Rating.create({
			userId: req.fields.userId,
			classId: req.params.id,
			rating: req.fields.rating
		});
		res.json(newRating);
	} catch (error) {

	}
}

module.exports = {
	createSingleClass,
	getSingleClass,
	getAllClasses,
	updateClass,
	deleteClass,
	getRatings,
	saveRating
};
