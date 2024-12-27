const mongoose  = require ('mongoose');

const userSchema = new mongoose.Schema({
    movies : String,
    actor: String,
    actress : String,
    ratings : Number
});


const Movie = mongoose.model("Movie", userSchema);
module.exports = Movie