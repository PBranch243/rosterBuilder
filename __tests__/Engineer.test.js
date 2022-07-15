const Engineer = require('../lib/Engineer.js');

test('check that engineer object was created', ()=> {
    const engineer = new Engineer('Eddie', 1, 'Eddie@email.com', 'EngineerEddie');

    expect(engineer.name).toStrictEqual(expect.any(String));
    expect(engineer.id).toStrictEqual(expect.any(Number));
    expect(engineer.email).toStrictEqual(expect.any(String));
    expect(engineer.github).toStrictEqual(expect.any(String));

});

test('check that we get employee name', () =>{
    const engineer = new Engineer('Eddie', 1, 'Eddie@email.com', 'EngineerEddie');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test('check that we get an employee id', () =>{
    const engineer = new Engineer('Eddie', 1, 'Eddie@email.com', 'EngineerEddie');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test('check that we get an email', () =>{
    const engineer = new Engineer('Eddie', 1, 'Eddie@email.com', 'EngineerEddie');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
})

test('check that we get employee role', () =>{
    const engineer = new Engineer('Eddie', 1, 'Eddie@email.com', 'EngineerEddie');

    expect(engineer.getRole()).toBe('Engineer');
});
