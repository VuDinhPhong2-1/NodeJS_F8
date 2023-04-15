const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongooes');
class MeController {
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

}
module.exports = new MeController;