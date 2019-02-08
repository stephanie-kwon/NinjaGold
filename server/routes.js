var controller = require('./controllers')
module.exports = function(app) {
    app.get('/', controller.home);
    app.post('/create', controller.create);
}