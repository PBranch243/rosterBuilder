const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email)
        
        this.officeNumber = officeNumber;
    }

    // override getRole to return manager
    getRole() {
        return 'Manager';
    }
}

// // create manager object and check that getRole() was over-ridden

// manager = new Manager('Tim', 2, 'time@email.com', 12);

// console.log(manager.getRole());

module.exports = Manager;