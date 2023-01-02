const Courses = require('../model/Courses');
const { mongooseObj } = require('../../util/mongoose')
var mongoose = require('mongoose');

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

    //DELETE
    update(req, res, next) {
        Courses.updateOne({ id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    delete(req, res, next) {
        Courses.deleteOne({ id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CoursesControllers;