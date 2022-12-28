const Courses = require('../model/Courses');
const { mutipleMongooseObj } = require('../../util/mongoose')
class SiteControllers {

    // GET /
    index(req, res, next) {
        Courses.find({})
            .then(Courses => {
                res.render('home', {
                    Courses: mutipleMongooseObj(Courses)
                })
            })
            .catch(next)

        // res.render('home');
    }

    //GET /Searach
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteControllers;