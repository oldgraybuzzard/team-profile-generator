const Intern = require('../lib/Intern');

// creating an Intern object 
test('creates an Intern object', () => {
    const intern = new Intern('John', 1, 'test@test.com', 'UF');

    expect(intern.school).toEqual(expect.any(String));
});

// school
test('gets intern school', () => {
    const intern = new Intern('John', 1, 'test@test.com', 'UF');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole() 
test('gets role of Intern', () => {
    const intern = new Intern('John', 1, 'test@test.com', 'UF');

    expect(intern.getRole()).toEqual("Intern");
});