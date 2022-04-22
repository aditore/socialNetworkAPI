const { User } = require('../models');

const userCount = async () =>
    User.aggregate()
        .count('userCount')
        .then((numberOfUsers) => numberOfUsers);

module.exports = {
    //get all users
    getAllUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users,
                    count: await userCount()
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    //post new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }
    //get single user by _id

    //update user by _id

    //delete user by _id (remove thoughts when deleted)

    /*new route within user*/

    //post to add friend to user

    //delete to remove friend from user


}