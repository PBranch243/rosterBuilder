const Manager = require('../lib/Manager.js');

test('check that manager object was created', ()=> {
    const manager = new Manager('Dave', 1, 'dave@email.com', 456);

    expect(manager.name).toStrictEqual(expect.any(String));
    expect(manager.id).toStrictEqual(expect.any(Number));
    expect(manager.email).toStrictEqual(expect.any(String));
    expect(manager.officeNumber).toStrictEqual(expect.any(Number));

});


test('check that we get manager name', () =>{
    const manager = new Manager('Tim', 2, 'time@email.com', 12);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test('check that we get an manager id', () =>{
    const manager = new Manager('Tim', 2, 'time@email.com', 12);

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test('check that we get an email', () =>{
    const manager = new Manager('Tim', 2, 'time@email.com', 12);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
})

test('check that we get manager role', () =>{
    const manager = new Manager('Tim', 2, 'time@email.com', 12);

    expect(manager.getRole()).toBe('Manager');
});