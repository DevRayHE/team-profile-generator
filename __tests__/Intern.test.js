const Intern = require('../lib/intern');

describe('Intern test', () => {

  // Test for all use cases when initializing a new Intern object

   // Arrange
   // Resets testParams for each test cases.
  beforeEach(() => {
    return testParams = {
      name: 'David', 
      id: 1001,
      email: 'david@corpemail.com',
      school: 'University of Sydney'
    };
  });
  
  describe('Initialization', ()=> {
    it('should create a class with name, id, email and github username', () => {

      // Act
      const intern = new Intern(testParams.name, testParams.id, testParams.email, testParams.school);

      // Assert
      expect(intern).toEqual({ 
        name: testParams.name, 
        id: testParams.id, 
        email: testParams.email, 
        school: testParams.school});
    });

    // Exception test
    it('should throw an error if valid parameters are not provided', () => {
      // Arrange
      // Initialize class without name, id or email
      const cbNoName = () => new Intern(testParams.id, testParams.email, testParams.school);
      const cbNoId = () => new Intern(testParams.name, testParams.email, testParams.school);
      const cbNoEmail = () => new Intern(testParams.name, testParams.id, testParams.school);
      const cbNoNameandId = () => new Intern(testParams.email,testParams.school);
      const cbNoNameandEmail = () => new Intern(testParams.id, testParams.school);
      const cbNoIdandEmail = () => new Intern(testParams.name, testParams.school);
      const cbNoParams = () => new Intern();
      const cbNoSchool = () => new Intern(testParams.name, testParams.id, testParams.email);

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
      expect(cbNoSchool).toThrowError(error);
    });
  });

  // Test getName method
  describe('Testing Method getName', () => {
    it('should return the name', () => {
      // Create new objects to test with
      const testGetName = new Intern(testParams.name, testParams.id, testParams.email, testParams.school);

      expect(testGetName.getName()).toEqual(testParams.name);
    });
  });

  // Test getID method
  describe('Testing Method getId', () => {
    it('should return the ID', () => {
      // Create new objects to test with
      const testGetId = new Intern(testParams.name, testParams.id, testParams.email, testParams.school);

      expect(testGetId.getId()).toEqual(testParams.id);
    });
  });

  // Test getEmail method
  describe('Testing Method getEmail', () => {
    it('should return the email address', () => {
      // Create new objects to test with
      const testGetEmail = new Intern(testParams.name, testParams.id, testParams.email, testParams.school);

      expect(testGetEmail.getEmail()).toEqual(testParams.email);
    });
  });

  // Test getRole method
  describe('Testing Method getRole', () => {
    it('should return the Role', () => {
      // Create new objects to test with
      const testGetRole = new Intern(testParams.name, testParams.id, testParams.email, testParams.school);

      expect(testGetRole.getRole()).toEqual('Intern');
    });
  });

  // Test getSchool method
  describe('Testing Method getSchool', () => {
    it('should return the intern school name', () => {
      // Create new objects to test with
      const testGetSchool = new Intern(testParams.name, testParams.id, testParams.email, testParams.school);

      expect(testGetSchool.getSchool()).toEqual(testParams.school);
    });
  });

});