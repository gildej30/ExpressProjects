const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/jokes', {useNewUrlParser: true, useUnifiedTopology: true}) 
        .then(() => console.log('You are connected'))
        .catch(err => console.log(`Something didn't happened. Error:${err}`));
