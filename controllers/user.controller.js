const User = require('../models/user.model');
const people = require('../assets/people.json');

class UserController{
    get(req, res){
        const filter = req.query.filter;
        const filterPeople = people.filter(people => {
            return people.first_name.includes(filter);
        });
        // return res.status(200).json('Welcome to Controller');
        return res.status(200).json({data: filterPeople, length: filterPeople.length});
    }
    post(req, res){
        const filter = req.body.filter;
        const filterPeople = people.filter(person => {
            return person.first_name.includes(filter);
        });
        console.log(filter);
        return res
            .status(200)
            .json({data: filterPeople, length: filterPeople.length});
    }
}

module.exports = new UserController();