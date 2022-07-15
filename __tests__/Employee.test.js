const Employee = require('../lib/Employee.js');



test('check that employee object was created', () =>{
    const employee = new Employee("Mike", 7, "mike@gmail.com");

    expect(employee.name).toStrictEqual(expect.any(String));
    expect(employee.id).toStrictEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));

});

test('check that we get employee name', () =>{
    const employee = new Employee("Mike", 7, "mike@gmail.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('check that we get an employee id', () =>{
    const employee = new Employee("Mike", 7, "mike@gmail.com");

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('check that we get employee role', () =>{
    const employee = new Employee("Mike", 7, "mike@gmail.com");

    expect(employee.getRole()).toBe('Employee');
});