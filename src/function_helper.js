
// Function to generate questions for inquirer prompt based on employeeType
const questions = (employeeType) => {

  let generalQuestions = [
    {
      type: 'input',
      message: `${employeeType} name: `,
      name: 'name',
    },
    {
      type: 'input',
      message: `${employeeType} employee ID: `,
      name: 'id',
    },
    {
      type: 'input',
      message: `${employeeType} email address: `,
      name: 'email',
    },
  ];

  let typeSpecificQuestions = [];

  switch (employeeType) {

    case 'Manager':
      typeSpecificQuestions = [{
        type: 'input',
        message: `${employeeType} office number: `,
        name: 'officeNumber',
      },]
      break;
    
    case 'Engineer':
      typeSpecificQuestions = [{
        type: 'input',
        message: `${employeeType} github username: `,
        name: 'github',
      },]
      break;

    case 'Intern':
      typeSpecificQuestions = [{
        type: 'input',
        message: `${employeeType} school: `,
        name: 'school',
      },]
      break;
  }


  allQuestions = generalQuestions.concat(typeSpecificQuestions);
  return (allQuestions);
}

module.exports = {
  questions,
}