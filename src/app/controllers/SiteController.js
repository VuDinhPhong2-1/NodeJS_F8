
class SiteController {
    index(req, res) {
        res.send('Hello site');
    }

    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;

