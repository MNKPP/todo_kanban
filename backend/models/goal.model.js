import * as mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        start: Date,
        end: Date
    },
    tags: [String],
    finished: Boolean,
});

const goalSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    isFinished: {
        type: Boolean,
    },
    member_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    tasks: [taskSchema]
}, {
    collection: 'Goal',
    timestamps: true
});


const Goal = mongoose.model('Goal', goalSchema);

export default Goal;