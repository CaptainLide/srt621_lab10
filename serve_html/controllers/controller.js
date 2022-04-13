const Book = require("/home/ajalcantara/test_env/serve_html/models/book");

exports.getAllBooks = (req, res, next) => {
    Book.find({}, (error, books) => {
        if (error) next(error);
        req.data = books;
        next();
    });
};

exports.getSingleBooks = (req, res, next) => {
    let paramsName = req.params.number;
    console.log(req.params.number)
    Book.find({bookNumber: paramsName}, (error, books) => {
        if (error) next(error);
        req.data = books;
        next()
    });
};