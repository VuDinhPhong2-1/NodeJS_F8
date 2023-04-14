const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Coure = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    v: { type: String, maxLength: 255 },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Coure);