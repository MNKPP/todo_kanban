import * as mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, {
        collection: 'Member',
        timestamps: true
});

const Member = mongoose.model('Member', memberSchema);

export default Member;