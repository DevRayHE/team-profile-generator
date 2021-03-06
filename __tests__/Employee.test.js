const Employee = require('../lib/employee');

describe('Employee test', () => {

  // Test for all use cases when initializing a new Employee object

   // Arrange
   // Resets testParams for each test cases.
  beforeEach(() => {
    return testParams = {
      name: 'David', 
      id: 1001,
      email: 'david@corpemail.com'
    };
  });
  
  describe('Initialization', ()=> {
    it('should create a class with name, id, email', () => {

      // Act
      const employee = new Employee(testParams.name, testParams.id, testParams.email);

      // Assert
      expect(employee).toEqual({ name: 'David', id: 1001, email: 'david@corpemail.com'});
    });
  });

  // Test getName method
  describe('Testing Method getName', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetName = new Employee(testParams.name, testParams.id, testParams.email);

      expect(testGetName.getName()).toEqual(testParams.name);
    });
  });

  // Test getID method
  describe('Testing Method getId', () => {
    it('should return the ID', () => {
      // Create new objects to test with
      const testGetId = new Employee(testParams.name, testParams.id, testParams.email);

      expect(testGetId.getId()).toEqual(testParams.id);
    });
  });

  // Test getEmail method
  describe('Testing Method getEmail', () => {
    it('should return the Email address', () => {
      // Create new objects to test with
      const testGetEmail = new Employee(testParams.name, testParams.id, testParams.email);

      expect(testGetEmail.getEmail()).toEqual(testParams.email);
    });
  });

  // Test getRole method
  describe('Testing Method getRole', () => {
    it('should return the role', () => {
      // Create new objects to test with
      const testGetRole = new Employee(testParams.name, testParams.id, testParams.email);

      expect(testGetRole.getRole()).toEqual('Employee');
    });
  });

});