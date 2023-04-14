const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongooes');
const { mongooseToObject } = require('../../util/mongooes');
class CoursesController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),

                }),
            )
            .catch(next);
    }
}
module.exports = new CoursesController;