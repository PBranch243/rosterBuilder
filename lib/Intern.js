const Employee = require('./Employee.js');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email)
        
        this.school = school;
    }

    // override getRole to return intern
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return `${this.school}`;
    }
}

// check getSchool() with a console log
// intern = new Intern("Kim Tern", 7, "kim@email.com", "Some University");
// console.log(intern.getSchool());

module.exports = Intern;