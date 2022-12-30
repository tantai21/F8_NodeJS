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
    edit(req, res, next) {
        Courses.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', { course: mongooseObj(course) })
            })
            .catch(next)

    }
    // POST
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.idVideo}/sddefault.jpg`
        const course = new Courses(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch((e) => {

            });
    }
}

module.exports = new CoursesControllers;