var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scoreDb');
    var scoreSchema = new mongoose.Schema({
        name: {type: String},
        score: {type: Number},
    }, {timestamps:true});

    mongoose.model('score', scoreSchema);
    var score = mongoose.model('score');

module.exports = {
    Score: mongoose.model('score', scoreSchema)
}