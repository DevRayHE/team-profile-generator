const inquirer = requir('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(id, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;

  }

  getRole() {
    return 'Employee';
  }
};

class Engineer extends Employee {
  constructor(id, github) {
    super(id, name, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }

};

class Intern extends Employee {
  constructor(id, school) {
    super(id, name, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
};