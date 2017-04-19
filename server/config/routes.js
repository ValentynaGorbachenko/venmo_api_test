// routes.js 
const loginsController = require('./../controllers/venmo_logins.js');

module.exports = (app) => {
	app.get('/', loginsController.index);
};