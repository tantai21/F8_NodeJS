const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Courses = new Schema({
    name: { type: String, default: 'TEST' },
    description: { type: String },
    image: { type: String },
    idVideo: { type: String },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});
module.exports = mongoose.model('Courses', Courses);