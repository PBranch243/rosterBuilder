const Employee = require('./Employee.js');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email)
        
        this.github = github;
    }

    // override getRole to return engineer
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return `${this.github}`;
    }
}

// // check getGithub() with a console log
// engineer = new Engineer('Eddie', 1, 'Eddie@email.com', 'EngineerEddie');
// console.log(engineer.getGithub());

module.exports = Engineer;