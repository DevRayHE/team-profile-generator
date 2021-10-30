const Manager = require('../lib/manager');

describe('Manager test', () => {

  // Test for all use cases when initializing a new Employee object

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

      console.log(manager);

      // Assert
      expect(manager).toEqual({ 
        name: testParams.name, 
        id: testParams.id, 
        email: testParams.email, 
        officeNumber: testParams.officeNumber});
    });

    // Exception test
    it('should throw an error if valid parameters are not provided', () => {
      // Arrange
      // Initialize class without name, id or email
      const cbNoName = () => new Manager(testParams.id, testParams.email, testParams.officeNumber);
      const cbNoId = () => new Manager(testParams.name, testParams.email, testParams.officeNumber);
      const cbNoEmail = () => new Manager(testParams.name, testParams.id, testParams.officeNumber);
      const cbNoNameandId = () => new Manager(testParams.email,testParams.officeNumber);
      const cbNoNameandEmail = () => new Manager(testParams.id, testParams.officeNumber);
      const cbNoIdandEmail = () => new Manager(testParams.name, testParams.officeNumber);
      const cbNoParams = () => new Manager();
      const cbNoOfficeNum = () => new Manager(testParams.name, testParams.id, testParams.email);

      // Act
      const error = new Error('One or more Parameters are missing!');

      // Assert
      expect(cbNoName).toThrowError(error);
      expect(cbNoId).toThrowError(error);
      expect(cbNoEmail).toThrowError(error);
      expect(cbNoNameandId).toThrowError(error);
      expect(cbNoNameandEmail).toThrowError(error);
      expect(cbNoIdandEmail).toThrowError(error);
      expect(cbNoParams).toThrowError(error);
      expect(cbNoOfficeNum).toThrowError(error);
    });
  });

  // Test getName method
  describe('Testing Method getName', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetName = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      console.log(testGetName.getName());
      expect(testGetName.getName()).toEqual(testParams.name);
    });
  });

  // Test getID method
  describe('Testing Method getId', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetId = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      console.log(testGetId.getId());
      expect(testGetId.getId()).toEqual(testParams.id);
    });
  });

  // Test getEmail method
  describe('Testing Method getEmail', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetEmail = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      console.log(testGetEmail.getEmail());
      expect(testGetEmail.getEmail()).toEqual(testParams.email);
    });
  });

  // Test getRole method
  describe('Testing Method getRole', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetRole = new Manager(testParams.name, testParams.id, testParams.email, testParams.officeNumber);

      expect(testGetRole.getRole()).toEqual('Manager');
    });
  });

});