var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

router.get('/w/:word', function(req, res) {
    	console.log(req.params.word);
})

module.exports = router;