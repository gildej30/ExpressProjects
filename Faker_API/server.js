const faker = require("faker");
const express = require("express");

const app = express();
const port = 8000;
const server = app.listen(port, () => console.log(`Listening on ${port}`));

class User {
    constructor(_id, firstName, lastName, phoneNumber, email, password) {
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber(),
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor(_id, name, address){
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(), 
            City: faker.address.city(), 
            State: faker.address.state(), 
            ZipCode: faker.address.zipCode(), 
            Country: faker.address.country()
        }
    }
}
console.log(new Company());
    
app.get("/api", (req,res) => {
res.send("Welcome, fool.");
});
    
app.get("/api/user/new", (req,res) => {
    const newUser = new User();
    res.json ({user: newUser});
});
    
app.get("/api/company/new", (req, res) => {
    const newCompany = new Company();
    res.json ({company: newCompany});
});

app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({user: newUser, company: newCompany});
});