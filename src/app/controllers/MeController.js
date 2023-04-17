const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongooes');
class MeController {
    index(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                }),
            )
        // Course.countDocumentsDeleted()
        //     .then((deleteCount) => {
        //         console.log(deleteCount)
        //     })
        //     .catch(next);
        // Course.find({})
        //     .then((courses) => {
        //         res.render('me/courses', {
        //             courses: mutipleMongooseToObject(courses),
        //         });
        //     })
        //     .catch(next);
    }
    trashCourse(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}
module.exports = new MeController;