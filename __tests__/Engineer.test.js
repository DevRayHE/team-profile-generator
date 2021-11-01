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