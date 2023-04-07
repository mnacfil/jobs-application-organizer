const mongoose = require('mongoose');
const validator = require('validator');
const brcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide your first name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Please provide your last name'],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide your email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email'
        }
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: [8, 'Password too weak, must be more than 8 characters'],
    },
    location: {
        type: String,
        default: 'Philippines'
    }
}, {
    timestamps: true
});

// hash password when created or updated before saving in db.
UserSchema.pre('save', async function() {
    if(!this.isModified('password')) return;
    const salt = await brcrypt.genSalt(10);
    this.password = await brcrypt.hash(this.password, salt);
});

UserSchema.methods.isPasswordMatch = async function(givenPassword) {
    return await brcrypt.compare(givenPassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);