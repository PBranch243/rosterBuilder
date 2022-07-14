const Employee = require('../lib/Employee.js');



test('check that employee object was created', () =>{
    const employee = new Employee("Mike", 7, "mike@gmail.com");

    expect(employee.name).toStrictEqual(expect.any(String));
    expect(employee.id).toStrictEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));

});