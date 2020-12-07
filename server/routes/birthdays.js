const router = require("express").Router();

const {
    getBirthdays,
    createBirthday,
    getSingleBirthday,
    deleteBirthday
} = require('../controllers/birthdays')

router.route('/').get(getBirthdays);

router.route('/').post(createBirthday);

router.route('/:id').get(getSingleBirthday);

// router.route('/:id').put(updateBirthday);

router.route('/:id').delete(deleteBirthday);

module.exports = router;

