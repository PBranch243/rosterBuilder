const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email)
        
        this.github = github;
    }

    // override getRole to return manager
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;