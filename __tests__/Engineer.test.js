const Engineer = require('../lib/Engineer');

// creates engineer object 
test('creates an engineer object', () => {
    const engineer = new Engineer('John', 1, 'test@test.com', 'oldgraybuzzard');

    expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('John', 1, 'test@test.com', 'oldgraybuzzard');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('John', 1, 'test@test.com', 'oldgraybuzzard');

    expect(engineer.getRole()).toEqual("Engineer");
});