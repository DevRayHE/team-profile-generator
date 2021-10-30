const Employee = require('./employee');

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;

    if((!this.name) || (!this.id) || (!this.email) || (!this.officeNumber)) {
      throw new Error ('One or more Parameters are missing!');
      return;
    };

  }

  getRole() {
    return 'Manager';
  }
};

module.exports = Manager;
