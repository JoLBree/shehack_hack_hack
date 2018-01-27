module.exports = function (router) {

    router.get('/', (req, res) => {

        res.status(200).send('Hello, world!').end();

    });
}