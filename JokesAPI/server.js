const express = require('express'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on ${port}`)
        );
    
    app.use(express.json(), express.urlencoded({extended:true}));

    app.get("https://localhost/api/", (req, res) => {
        res.send();
    })

    require('./server/config/database.config');
    require('./server/routes/jokes.routes')(app);