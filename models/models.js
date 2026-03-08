var { DataTypes, Model } = require("sequelize");
var { sequelize } = require("../config/database");

class Class extends Model { };
class Trainer extends Model { };
class User extends Model { };
class Asset extends Model { };
class Rating extends Model { };
class Message extends Model { };
class Newsletter extends Model { };
class News extends Model { };
class Testimonial extends Model { };

Class.init({
	className: DataTypes.TEXT,
	classDescription: DataTypes.TEXT,
	classDay: DataTypes.TEXT,
	classTime: DataTypes.TEXT,
	maxParticipants: DataTypes.INTEGER
}, { sequelize, modelName: "class" });

Trainer.init({
	trainerName: DataTypes.TEXT,
}, { sequelize, modelName: "trainer" });

User.init({
	username: DataTypes.TEXT,
	password: DataTypes.TEXT,
	userFirstName: DataTypes.TEXT,
	userLastName: DataTypes.TEXT,
	role: DataTypes.TEXT
}, { sequelize, modelName: "user" });

Asset.init({
	url: DataTypes.TEXT
}, { sequelize, modelName: "asset" });

Rating.init({
	classId: DataTypes.INTEGER,
	userId: DataTypes.INTEGER,
	rating: DataTypes.INTEGER
}, { sequelize, modelName: "rating" });

Message.init({
	name: DataTypes.TEXT,
	email: DataTypes.TEXT,
	message: DataTypes.TEXT
}, { sequelize, modelName: "message" });

Newsletter.init({
	email: DataTypes.TEXT,
}, { sequelize, modelName: "newsletter" });

News.init({
	title: DataTypes.TEXT,
	text: DataTypes.TEXT,
}, { sequelize, modelName: "news" });

Testimonial.init({
	text: DataTypes.TEXT,
	name: DataTypes.TEXT
}, { sequelize, modelName: "testimonial" });

User.belongsToMany(Class, { through: "Roster" });
Class.belongsToMany(User, { through: "Roster" });

Trainer.belongsTo(Asset, { foreignKey: "assetId" });
Asset.hasOne(Trainer, { foreignKey: "assetId" });

Class.belongsTo(Trainer, { foreignKey: "trainerId" });
Trainer.hasOne(Class, { foreignKey: "trainerId" });

Class.belongsTo(Asset, { foreignKey: "assetId" });
Asset.hasOne(Class, { foreignKey: "assetId" });

News.belongsTo(Asset, { foreignKey: "assetId" });
Asset.hasOne(News, { foreignKey: "assetId" });

sequelize.sync({ force: false })
	.then(function () {
		console.log("Tabels created");
	})
	.catch(function (error) {
		console.error(error);
	});

module.exports = {
	Class,
	Trainer,
	User,
	Asset,
	Rating,
	Message,
	Newsletter,
	News,
	Testimonial
};
