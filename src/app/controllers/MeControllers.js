const Courses = require('../model/Courses');
const { mongooseObj, mutipleMongooseObj } = require('../../util/mongoose')
class MeControllers {
    storedCourses(req, res, next) {
        Promise.all([Courses.find({}), Courses.countDocumentsDeleted()])
            .then(([course, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    course: mutipleMongooseObj(course)
                })
            })
            .catch(next)
    }
    trashCourses(req, res, next) {
        Courses.findDeleted({})
            .then(course => res.render('me/trash-courses', { course: mutipleMongooseObj(course) }))
            .catch(next)
    }


}

module.exports = new MeControllers;