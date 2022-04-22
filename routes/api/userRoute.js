const router = require('express').Router();
const {
    getAllUsers,
    //get single,
    createUser,
    //update,
    //delete
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

module.exports = router;