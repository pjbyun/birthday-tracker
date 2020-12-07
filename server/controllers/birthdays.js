const Birthday = require('../db/models/birthday.model');

const getBirthdays = async ( req, res, next) => {
    try {
        const birthdays = await Birthday.find();
        res.json(birthdays);
    } catch (err) {
        next(err);
    }
};

const createBirthday = async (req, res, next) => {
    try {
        const birthday = new Birthday(req.body);
        await birthday.save()
        res.status(201).json(birthday);
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

const updateBirthday = async (req, res, next) => {
    try {
        const updatedBirthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        await updatedBirthday.save();
        res.json(updatedBirthday);
    }   catch (err) {
        next(err);
    }
};

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
    updateBirthday,
    deleteBirthday
};