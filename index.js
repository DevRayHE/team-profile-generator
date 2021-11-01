// Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const renderPage = require('./src/html_helper');
const questionTemplate = require('./src/function_helper');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require ('./lib/intern');

let teamData = [];
let teamTitle = '';

// Function to initialize app
function init() {

  // start inquirer prompt to create team
  createTeam();
}

// Function to create team
const createTeam = () => {

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
    teamTitle = data.teamTitle;
    addManager();
  })
  .catch((error) => {
    console.error(error);
  });

};

// Function to prompt for manger detail
const addManager = () => {

  inquirer
    .prompt(questionTemplate.questions('Manager'))
    .then((data) => {
      console.log(data);
      if ((!data.name) || (!data.id) || (!data.email) || (!data.officeNumber)) {
        console.error(`Input error, please try again!`);
        addManager();
      } else {
        const {name, id, email, officeNumber} = data;
        const newManager = new manager(name, id, email, officeNumber); 
        console.log(newManager);
        console.log(newManager.getRole());
        teamData.push(newManager);
        console.log("team data: " + teamData[0].name);
        selection();
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// Function to prompt for engineer detail
const addEngineer = () => {

  inquirer
    .prompt(questionTemplate.questions('Engineer'))
    .then((data) => {
      if ((!data.name) || (!data.id) || (!data.email) || (!data.github)) {
        console.error(`Input error, please try again!`);
        addEngineer();
      } else {
        const {name, id, email, github} = data;
        const newEngineer = new engineer(name, id, email, github); 
        teamData.push(newEngineer);
        selection();
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// Function to prompt for intern detail
const addIntern = () => {

  inquirer
    .prompt(questionTemplate.questions('Intern'))
    .then((data) => {
      if ((!data.name) || (!data.id) || (!data.email) || (!data.school)) {
        console.error(`Input error, please try again!`);
        addIntern();
      } else {
        const {name, id, email, school} = data;
        const newIntern = new intern(name, id, email, school); 
        teamData.push(newIntern);
        selection();
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// Function to select add enginner, add intern or finish building the team
const selection = () => {
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

      const { selection } = data;

      switch (selection) {

        case 'Add an engineer':
          addEngineer();
          break;

        case 'Add an intern':
          addIntern();
          break;

        case 'Finish building my team':
          console.log(`${selection} chosen!`)
          console.log(teamData);
          // Call the renderPage method from html_helper.js to generate html page code and assign to variable 
          const contentToWrite = renderPage.renderPage(teamData, teamTitle);

          // Create Html file
          fs.writeFile(
            './dist/index.html',
            contentToWrite,
            (writeErr) => 
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully created the team profile page!')
          )
          break;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

// Function call to initialize app
init();