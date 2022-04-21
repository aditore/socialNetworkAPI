const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

//create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max_length: 10
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function(v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/(v);
                },
                message: notEmail => `${notEmail.value} is not a valid email!`
            }
        },
        thoughts: [thoughtSchema],
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const User = model('users', userSchema);

module.exports = User;