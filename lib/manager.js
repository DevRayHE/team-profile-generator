const Employee = require('./employee');

class Manager extends Employee {
  constructor(id, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;

  }

  getRole() {
    return 'Manager';
  }
};

module.exports = Manager;
