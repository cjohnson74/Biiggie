const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        String,
        unique: true
    },
    password: {
        type: String,
        // bcrypt
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Invalid, enter an e-mail address']
    },
    description: {
        type: String
    },
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;