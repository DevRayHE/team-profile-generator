const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;

    if((!this.name) || (!this.id) || (!this.email) || (!this.officeNumber)) {
      throw new Error ('One or more Parameters are missing!');
    };

  }

  getRole() {
    return 'Manager';
  }
};

module.exports = Manager;
