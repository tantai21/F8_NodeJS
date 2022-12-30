const Courses = require('../model/Courses');
const { mongooseObj } = require('../../util/mongoose')
class MeControllers {
    storedCourses(req, res, next) {
        res.render('me/stored-courses')
    }

}

module.exports = new MeControllers;