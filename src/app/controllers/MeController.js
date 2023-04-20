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


    handelFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invailid' });
        }
    }
    handelFormActionsTrash(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid' });
        }
    }

}
module.exports = new MeController;