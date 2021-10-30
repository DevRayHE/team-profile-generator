class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    if((!this.name) || (!this.id) || (!this.email)) {
      throw new Error ('One or more Parameters are missing!');
    };

  }


  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }

}

module.exports = Employee;