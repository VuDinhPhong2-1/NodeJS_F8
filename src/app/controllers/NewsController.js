

class NewsController {
    index(req, res) {
        return res.send('Hello news')
    }
}

module.exports = new NewsController;