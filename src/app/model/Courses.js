const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Courses = new Schema({
    name: { type: String, default: 'TEST' },
    description: { type: String },
    image: { type: String },
    idVideo: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    deletedAt: { type: Date }
}, {
    timestamps: true
});
// ADD PLUGIN
mongoose.plugin(slug);
Courses.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('Courses', Courses);