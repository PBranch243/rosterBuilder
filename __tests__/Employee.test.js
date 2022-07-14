const Employee = require('./lib/Employee.js');

test('check that employee object was created', () =>{
    const Employee = new Employee();

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));

})