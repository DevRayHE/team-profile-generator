const Manager = require('../lib/manager');

describe('Manager test', () => {

  // Test for all use cases when initializing a new Manager object

   // Arrange
   // Resets testParams for each test cases.
  beforeEach(() => {
    return testParams = {
      name: 'David', 
      id: 1001,
      email: 'david@corpemail.com',
      officeNumber: '81102688'
    };
  });
  
  describe('Initialization', ()=> {
    it('should create a class with name, id, email and office number', () => {

      // Act
      const manager = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      // Assert
      expect(manager).toEqual({ 
        name: testParams.name, 
        id: testParams.id, 
        email: testParams.email, 
        officeNumber: testParams.officeNumber});
    });

  });

  // Test getName method
  describe('Testing Method getName', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetName = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      expect(testGetName.getName()).toEqual(testParams.name);
    });
  });

  // Test getID method
  describe('Testing Method getId', () => {
    it('should return the ID', () => {
      // Create new objects to test with
      const testGetId = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      expect(testGetId.getId()).toEqual(testParams.id);
    });
  });

  // Test getEmail method
  describe('Testing Method getEmail', () => {
    it('should return the Email address', () => {
      // Create new objects to test with
      const testGetEmail = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      expect(testGetEmail.getEmail()).toEqual(testParams.email);
    });
  });

  // Test getRole method
  describe('Testing Method getRole', () => {
    it('should return the role', () => {
      // Create new objects to test with
      const testGetRole = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      expect(testGetRole.getRole()).toEqual('Manager');
    });
  });

});