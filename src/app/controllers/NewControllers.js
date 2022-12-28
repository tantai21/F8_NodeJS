class NewsControllers {

    // GET /news
    index(req, res) {
        res.render('news');
    }

    //GET 
    show(req, res) {
        res.send('HELLO WORLD');
    }
}

module.exports = new NewsControllers;