const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Technology', 'Health', 'Sport', 'Entertainment', 'Education', 'Business', 'Politics', 'Fashion', 'Food', 'Travel', 'Lifestyle','Agriculture', 'Music', 'Movies', 'Books', 'Science', 'Art', 'History', 'Religion', 'Nature', 'Weather', 'Investment', 'Real Estate'], message: '{VALUE} is not supported'
    },
    description: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
}, { timestamps: true });


module.exports = model('Post', postSchema);