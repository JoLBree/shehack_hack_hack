module.exports = function (router) {

    const path = require('path');

    router.get('/app', (req, res) => {
        res.sendFile(path.join(__dirname + '/../src/views/index.html'));
    });

    router.get('/breathe', (req, res) => {
        res.sendFile(path.join(__dirname + '/../src/views/breathe.html'));
    });

    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + "/../src/views/intro.html"));
    });
}