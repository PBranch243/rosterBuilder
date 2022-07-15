const Intern = require('../lib/Intern');

test('check that intern object was created with the correct properties', () =>{
    const intern = new Intern("Kim Tern", 7, "kim@email.com", "Some University");

    expect(intern.name).toStrictEqual(expect.any(String));
    expect(intern.id).toStrictEqual(expect.any(Number));
    expect(intern.email).toStrictEqual(expect.any(String));
    expect(intern.school).toStrictEqual(expect.any(String));

});


test('check that we get employee name', () =>{
    const intern = new Intern("Kim Tern", 7, "kim@email.com", "Some University");

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test('check that we get an employee id', () =>{
    const intern = new Intern("Kim Tern", 7, "kim@email.com", "Some University");

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test('check that we get an email', () =>{
    const intern = new Intern("Kim Tern", 7, "kim@email.com", "Some University");

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
})

test('check that we get employee role', () =>{
    const intern = new Intern("Kim Tern", 7, "kim@email.com", "Some University");

    expect(intern.getRole()).toBe('Intern');
});