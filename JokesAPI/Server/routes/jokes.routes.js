const JokeController = require("../controllers/joke.controller") //importing the joke controller to here

module.exports = (app) => {
    app.get("/api/jokes", JokeController.index)
    app.get("/api/joke/:id", JokeController.show)
    app.post("/api/joke/create", JokeController.create)
    app.put("/api/joke/update/:id", JokeController.update)
    app.delete("/api/joke/destroy/:id", JokeController.destroy)
}