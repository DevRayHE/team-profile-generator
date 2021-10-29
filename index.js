const inquirer = require('inquirer');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const enginner = require('./lib/engineer');
const intern = require ('./lib/intern');

// Function to initialize app
function init() {

  createTeam();
  
}

// Function to create team
function createTeam() {

  inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Welcome to Team Profile Generator, simply press Enter to start.',
        name: 'start',
      },
      {
        type: 'input',
        message: 'The Team\'s name:',
        name: 'teamTitle',
      }
    ])
    .then((data) => {
      console.log(data);
      addManager();
    })
    .catch((error) => {
      console.error(error);
    });

}

// Function to prompt for manger detail
function addManager() {

  let subject = 'Team Manager\'s';

  inquirer
    .prompt([
      {
        type: 'input',
        message: `${subject} name:`,
        name: 'managerName',
      },
      {
        type: 'input',
        message: `${subject} employee ID:`,
        name: 'managerID',
      },
      {
        type: 'input',
        message: `${subject} email address`,
        name: 'managerEmail',
      },
      {
        type: 'input',
        message: `${subject} office number`,
        name: 'managerNumber',
      },
    ])
    .then((data) => {
      console.log(data);
      selection();
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to prompt for engineer detail
function addEngineer() {
  let subject = 'Engineer\'s';

  inquirer
    .prompt([
      {
        type: 'input',
        message: `${subject} name:`,
        name: 'engineerName',
      },
      {
        type: 'input',
        message: `${subject} employee ID:`,
        name: 'engineerID',
      },
      {
        type: 'input',
        message: `${subject} email address`,
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: `${subject} Github username`,
        name: 'engineerGithub',
      },
    ])
    .then((data) => {
      console.log(data);
      selection();
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to prompt for intern detail
function addIntern() {
  let subject = 'Intern\'s';

  inquirer
    .prompt([
      {
        type: 'input',
        message: `${subject} name:`,
        name: 'internName',
      },
      {
        type: 'input',
        message: `${subject} employee ID:`,
        name: 'internID',
      },
      {
        type: 'input',
        message: `${subject} email address`,
        name: 'internEmail',
      },
      {
        type: 'input',
        message: `${subject} School`,
        name: 'internSchool',
      },
    ])
    .then((data) => {
      console.log(data);
      selection();
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to select add enginner, add intern or finish building the team
function selection() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: `Please choose from the optios below:`,
        name: 'selection',
        choices: ['Add an engineer', 'Add an intern', 'Finish building my team'],
      }
    ])
    .then((data) => {
      console.log(data);
      const { selection } = data;

      switch (selection) {

        case 'Add an engineer':
          console.log(`${selection} chosen!`)
          addEngineer();
          break;

        case 'Add an intern':
          console.log(`${selection} chosen!`)
          addIntern();
          break;

        case 'Finish building my team':
          console.log(`${selection} chosen!`)
          break;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();