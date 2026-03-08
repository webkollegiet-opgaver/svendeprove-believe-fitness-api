var { createSingleClass, getSingleClass, getAllClasses, getRatings, saveRating, updateClass, deleteClass } = require("../controllers/class.controller");
var { isAuthorized, isAdmin } = require("../middleware/auth");

module.exports = function (router) {
	router.post("/api/v1/classes", isAuthorized, isAdmin, createSingleClass);
	router.get("/api/v1/classes/:id", getSingleClass);
	router.get("/api/v1/classes", getAllClasses);
	router.put("/api/v1/classes/:id", isAuthorized, isAdmin, updateClass);
	router.delete("/api/v1/classes/:id", isAuthorized, isAdmin, deleteClass);
	router.get("/api/v1/classes/:id/ratings", getRatings);
	router.post("/api/v1/classes/:id/ratings", isAuthorized, saveRating);
};
