const Birthday = require('../db/models/birthday.model');

const getBirthdays = async ( req, res, next) => {
    try {
        const birthday = await Birthday(req.body);
        await birthday.save()
        res.status(201).json(birthday);
    } catch (err) {
        next(err);
    }
};

const createBirthday = async (req, res, next) => {
    try {
        const birthday = new Birthday(req.body);
        await birthday.save()
        res.status(201).json(question);
    }   catch (err) {
        next(err);
    }
};

const getSingleBirthday = async (req, res, next) => {
    try {
        const birthday = await Birthday.findById(req.params.id)
        res.status(200).json(birthday);
    }   catch (err) {
        next(err);
    }
};

// const updateBirthday = (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const {}
//     }
// }

const deleteBirthday = async (req, res, next) => {
    try {
        const birthday = await Birthday.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json('Birthday has been deleted')
    }   catch (err) {
        next(err);
    }
};

module.exports = {
    getBirthdays,
    createBirthday,
    getSingleBirthday,
    deleteBirthday
};