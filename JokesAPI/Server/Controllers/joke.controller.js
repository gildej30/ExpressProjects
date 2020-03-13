const Joke = require('../Models/joke.model');


module.exports = {
    index: (req, res) => {
        Joke.find()
            .then(jokes => res.json(jokes))
            .catch(err => res.status(400).json(err.errors))
    },

    show: (req, res) => {
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    },

    create: (req, res) => {
        Joke.create(req.body) //WHEN CREATING you are adding THE BODY of the model/array
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    },

    update: (req, res) => {  //in mongoose, WHEN YOU UPDATE its doesnt run the validators, so you need to RUN THEM AGAIN
        Joke.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators:true})
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    },

    destroy: (req, res) => { 
        Joke.deleteOne({_id:req.params.id}, req.body, {runValidators:true})
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    }
    }


