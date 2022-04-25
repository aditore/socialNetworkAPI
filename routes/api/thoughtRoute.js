const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    //post reaction,
    //delete reaction
} = require('../../controllers/thoughtController');

router.route('/')
    .get(getAllThoughts)

router.route('/:userId')
    .post(createThought);

router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;