/*
 * GET home page.
 */

module.exports = function(app) {
    app.get('/', function(req, res) {
        Post.get(null, function(err, posts) {
            if (err) {
                posts = []
            }
            res.render('index', {
                title: '首页',
                posts: posts,
            });
        });
    });

    app.get('/w/:word', function(req, res) {
    	console.log(req.params.word);
    })
};
