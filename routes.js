var express = require('express');
var router = express.Router();

router.route('/notify')
    .get(function (req, res) {
        res.json({
            message: "testing route"
        });
    });

module.exports = router;