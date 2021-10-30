const { beforeEach } = require('@jest/globals');
const Employee = require('../lib/employee');

describe('Employee test', () => {

  // Test for all use cases when initializing a new Employee object

   // Arrange
  beforeEach(() => {
    return testParams = {testName: 'David', 
      testId: 1001,
      testEmail: 'david@corpemail.com'
    };
  })
  

  describe('Initialization', ()=> {
    it('should create a class with name, id, email', () => {

      // Act
      const employee = new Employee(testParams.testName, testParams.testId, testParams.testEmail);

      console.log(employee);

      // Assert
      expect(employee).toEqual({ name: 'David', id: 1001, email: 'david@corpemail.com'});
    });

    // Exception test
    // it('should throw an error if not provided a valid parameter', () => {
    //   // Arrange
    //   const cbEmployeeNoName = new Employee(testParams.testId, testParams.testEmail);
    //   const cbEmployeeNoId = new Employee(testParams.testName, testParams.testEmail);
    //   const cbEmployeeNoEmail = new Employee(testParams.testName, testParams.testId);

    //   // Act
    //   const errNoName = new Error('Expected first parameter "name" is missing');
    //   const errNoId = new Error('Expected second parameter "id" is missing');
    //   const errNoEmail = new Error('Expected third parameter "email" is missing');

    //   // Assert
    //   expect(cbEmployeeNoName).toThrowError(errNoName);
    //   expect(cbEmployeeNoId).toThrowError(errNoId);
    //   expect(cbEmployeeNoEmail).toThrowError(errNoEmail);
    // });
  });

  // Test getName method
  describe('Testing Method getName', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetName = new Employee(testParams.testName, testParams.testId, testParams.testEmail);

      console.log(testGetName.getName());
      expect(testGetName.getName()).toEqual(testParams.testName);
    });
  });

  // Test getID method
  describe('Testing Method getId', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetId = new Employee(testParams.testName, testParams.testId, testParams.testEmail);

      console.log(testGetId.getId());
      expect(testGetId.getId()).toEqual(testParams.testId);
    });
  });

  // Test getEmail method
  describe('Testing Method getEmail', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetEmail = new Employee(testParams.testName, testParams.testId, testParams.testEmail);

      console.log(testGetEmail.getEmail());
      expect(testGetEmail.getEmail()).toEqual(testParams.testEmail);
    });
  });

  // Test getRole method
  describe('Testing Method getRole', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetRole = new Employee(testParams.testName, testParams.testId, testParams.testEmail);

      expect(testGetRole.getRole()).toEqual('Employee');
    });
  });

});