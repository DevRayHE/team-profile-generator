const Employee = require('./employee');

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;

    if((!this.name) || (!this.id) || (!this.email) || (!this.school)) {
      throw new Error ('One or more Parameters are missing!');
    };
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
};

module.exports = Intern;
