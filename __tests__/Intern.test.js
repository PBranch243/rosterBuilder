const Intern = require('../lib/Intern');

test('check that intern object was created with the correct properties', () =>{
    const intern = new Intern("Kim Tern", 7, "kim@email.com", "Some University");

    expect(intern.name).toStrictEqual(expect.any(String));
    expect(intern.id).toStrictEqual(expect.any(Number));
    expect(intern.email).toStrictEqual(expect.any(String));
    expect(intern.school).toStrictEqual(expect.any(String));

});