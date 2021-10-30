const Employee = require('./employee');

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;

    if((!this.name) || (!this.id) || (!this.email) || (!this.github)) {
      throw new Error ('One or more Parameters are missing!');
    };
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
};

module.exports = Engineer;

