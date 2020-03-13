const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String, 
        required:[true, "You need this."],
        minlength: [6, "More characters make the set up better."]
    },
    punchline: {
        type: String, 
        required: [true, "You also need this."],
        minlength: [6, "Gonna need more than 6 characters to make the punchline funny."]
    }
    
},
    {timestamps: true}
    );

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;