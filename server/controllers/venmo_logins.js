// venmo_logins.js - controller

module.exports = {
	index: (req, res) => {
		res.render('index', {title: 'Simple examlpe of Venmo API'});
	}
}