const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/anoh8n', {useNewUrlParser: true , useUnifiedTopology: true});

module.exports = mongoose;