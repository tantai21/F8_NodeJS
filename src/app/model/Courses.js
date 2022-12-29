const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Courses = new Schema({
    name: { type: String, default: 'TEST' },
    description: { type: String },
    image: { type: String },
    slug: { type: String },
    idVideo: { type: String },
}, {
    timestamps: true
});
module.exports = mongoose.model('Courses', Courses);