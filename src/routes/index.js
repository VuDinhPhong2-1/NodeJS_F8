const siteRouter = require('./site');
const newsRouter = require('./news');
const coursesRouter = require('./courses');
function route(app) {

    app.use('/site', siteRouter);
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.get('/', (req, res) => {
        res.render('home');
    })


}

module.exports = route;