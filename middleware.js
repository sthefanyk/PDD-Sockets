var bodyParser = require('body-parser');

module.exports = function (app, io) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        var notify = req.query.notification || '';
        if (notify != '') {
            io.emit('notification', notify);
            next();
        } else {
            next();
        }
    });
};