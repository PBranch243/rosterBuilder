class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
// Add methods here
    getName(){
        return `${this.name}`;
    }

  };


  module.exports = Employee;