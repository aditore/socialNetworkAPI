const router = require('express').Router();
const {
    getAllUsers,
    //get single _id,
    createUser,
    //update _id,
    //delete _id,
    //post friend,
    //delete friend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

module.exports = router;