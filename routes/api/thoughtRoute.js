const router = require('express').Router();
const {
    getAllThoughts,
    //get thought _id
    createThought,
    //update thought _id,
    //delete thought _id,
    //post reaction,
    //delete reaction
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

module.exports = router;