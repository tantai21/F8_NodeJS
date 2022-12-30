const Courses = require('../model/Courses');
const { mongooseObj, mutipleMongooseObj } = require('../../util/mongoose')
class MeControllers {
    storedCourses(req, res, next) {
        Courses.find({})
            .then(course => res.render('me/stored-courses', { course: mutipleMongooseObj(course) }))
            .catch(next)
    }

}

module.exports = new MeControllers;