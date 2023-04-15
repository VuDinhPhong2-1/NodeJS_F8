const Course = require('../models/Course');
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
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store thêm khóa học
    store(req, res, next) {
        const formData = req.body;
        formData.image = "https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.15752-9/338791106_506774264814192_709385401465265985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Tr5PJ9-URTcAX_WtBi_&_nc_ht=scontent.fsgn5-8.fna&oh=03_AdSNgg3fP79R6CE0TDYnKh9afU3rtUYCzhBjFpQYNz3MOg&oe=64603B09"
        const course = new Course(formData);
        course.save();
        res.send('Course save');
    }
    // [GET] /courses/:id/edit render vào file view edit.hbs và ghi dữ liệu vào form
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course),

            }),
            )
            .catch(next);

    }
    // [PUT] /courses/:id ghi dữ liệu vào database
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me'))
            .catch(next);

    }
}
module.exports = new CoursesController;