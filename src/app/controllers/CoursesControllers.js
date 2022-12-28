const Courses = require('../model/Courses');
const { mongooseObj } = require('../../util/mongoose')
class CoursesControllers {

    //GET /Searach
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseObj(course) })
            })
            .catch(next)
    }
    // GET
    create(req, res, next) {
        res.render('courses/create')
    }
    // POST
    store(req, res, next) {
        // const course = new Courses(req.body);
        res.json(req.body)
    }
}

module.exports = new CoursesControllers;