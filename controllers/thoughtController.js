const { Thought, User } = require('../models');

module.exports = {
    //get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    //get thoughts by _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought found with this ID' })
                : res.status(200).json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },
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
                ? res.status(404).json({ message: 'Thought created, but no user found' })
                : res.status(200).json('Created thought!')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    //update thought by _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought found with this ID' })
                : res.status(200).json('Thought updated!')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    //delete thought by _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with that ID' })
                : res.json({ message: 'User and thoughts deleted!' })
        )
        .catch((err) => res.status(500).json(err));
    }
    /*new route*/
    //post reaction

    //delete reaction
}