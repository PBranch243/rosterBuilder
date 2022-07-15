const Manager = require('../lib/Manager.js');

test('check that manager object was created', ()=> {
    const manager = new Manager('Dave', 1, 'dave@email.com', 456);

    expect(manager.name).toStrictEqual(expect.any(String));
    expect(manager.id).toStrictEqual(expect.any(Number));
    expect(manager.email).toStrictEqual(expect.any(String));
    expect(manager.officeNumber).toStrictEqual(expect.any(Number));

});
