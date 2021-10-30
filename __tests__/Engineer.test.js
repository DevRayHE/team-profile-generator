const Engineer = require('../lib/engineer');

describe('Engineer test', () => {

  // Test for all use cases when initializing a new Engineer object

   // Arrange
   // Resets testParams for each test cases.
  beforeEach(() => {
    return testParams = {
      name: 'David', 
      id: 1001,
      email: 'david@corpemail.com',
      github: 'developerDavid'
    };
  });
  
  describe('Initialization', ()=> {
    it('should create a class with name, id, email and github username', () => {

      // Act
      const engineer = new Engineer(testParams.name, testParams.id, testParams.email, testParams.github);

      // Assert
      expect(engineer).toEqual({ 
        name: testParams.name, 
        id: testParams.id, 
        email: testParams.email, 
        github: testParams.github});
    });

    // Exception test
    it('should throw an error if valid parameters are not provided', () => {
      // Arrange
      // Initialize class without name, id or email
      const cbNoName = () => new Engineer(testParams.id, testParams.email, testParams.github);
      const cbNoId = () => new Engineer(testParams.name, testParams.email, testParams.github);
      const cbNoEmail = () => new Engineer(testParams.name, testParams.id, testParams.github);
      const cbNoNameandId = () => new Engineer(testParams.email,testParams.github);
      const cbNoNameandEmail = () => new Engineer(testParams.id, testParams.github);
      const cbNoIdandEmail = () => new Engineer(testParams.name, testParams.github);
      const cbNoParams = () => new Engineer();
      const cbNoGithub = () => new Engineer(testParams.name, testParams.id, testParams.email);

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
      expect(cbNoGithub).toThrowError(error);
    });
  });

  // Test getName method
  describe('Testing Method getName', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetName = new Engineer(testParams.name, testParams.id, testParams.email, testParams.github);

      expect(testGetName.getName()).toEqual(testParams.name);
    });
  });

  // Test getID method
  describe('Testing Method getId', () => {
    it('should return the ID', () => {
      // Create new objects to test with
      const testGetId = new Engineer(testParams.name, testParams.id, testParams.email, testParams.github);

      expect(testGetId.getId()).toEqual(testParams.id);
    });
  });

  // Test getEmail method
  describe('Testing Method getEmail', () => {
    it('should return the email address', () => {
      // Create new objects to test with
      const testGetEmail = new Engineer(testParams.name, testParams.id, testParams.email, testParams.github);

      expect(testGetEmail.getEmail()).toEqual(testParams.email);
    });
  });

  // Test getRole method
  describe('Testing Method getRole', () => {
    it('should return the role', () => {
      // Create new objects to test with
      const testGetRole = new Engineer(testParams.name, testParams.id, testParams.email, testParams.github);

      expect(testGetRole.getRole()).toEqual('Engineer');
    });
  });

  // Test getGithub method
  describe('Testing Method getGithub', () => {
    it('should return the github username', () => {
      // Create new objects to test with
      const testGetGithub = new Engineer(testParams.name, testParams.id, testParams.email, testParams.github);

      expect(testGetGithub.getGithub()).toEqual(testParams.github);
    });
  });

});