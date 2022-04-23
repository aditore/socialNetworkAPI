const { Thought, User } = require('../models');

module.exports = {
    //get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    //get thoughts by _id

    //post thought through user _id
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id} },
                    { new: true }
                );
            })
            .then((user) => 
                !user
                    ? res.status(404).json({
                        message: 'Thought created, but no user found',
                    })
                    : res.status(200).json('Created thought!')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    }
    //update thought by _id

    //delete thought by _id

    /*new route*/
    //post reaction

    //delete reaction
}