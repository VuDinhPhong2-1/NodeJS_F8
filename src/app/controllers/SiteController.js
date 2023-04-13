const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongooes');
class SiteController {
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (error) {
            res.status(400).json({ error: 'Error!!!' });
        }
    }

    async test(req, res, next) {
        const courses = await Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(error => next(error))
    }

    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;

