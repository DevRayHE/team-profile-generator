const inquirer = require('inquirer');
const fs = require('fs');
const renderFunction = require('./src/html_helper');
// import function template - questions template
const functionTemplate = require('./src/function_helper');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require ('./lib/intern');

let teamData = [];

// Function to initialize app
function init() {

  // Clear the content and start with an empty team_data.json data file
  // clearFileContent();

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
    console.log(data);
    addManager();
  })
  .catch((error) => {
    console.error(error);
  });

};

// Function to prompt for manger detail
const addManager = () => {

  inquirer
    .prompt(functionTemplate.questions('Manager'))
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
    .prompt(functionTemplate.questions('Engineer'))
    .then((data) => {
      console.log(data);
      if ((!data.name) || (!data.id) || (!data.email) || (!data.github)) {
        console.error(`Input error, please try again!`);
        addEngineer();
      } else {
        const {name, id, email, github} = data;
        const newEngineer = new engineer(name, id, email, github); 
        console.log(newEngineer.getRole());
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
    .prompt(functionTemplate.questions('Intern'))
    .then((data) => {
      console.log(data);
      if ((!data.name) || (!data.id) || (!data.email) || (!data.school)) {
        console.error(`Input error, please try again!`);
        addIntern();
      } else {
        const {name, id, email, school} = data;
        const newIntern = new intern(name, id, email, school); 
        console.log(newIntern.getRole());
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
          const contentToWrite = renderFunction.renderPage();

          console.log(teamData.map( member => member.getRole()));
          // Create Html file
          fs.writeFile(
            './dist/index.html',
            contentToWrite,
            (writeErr) => 
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully cleared data file!')
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