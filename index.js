const inquirer = require("inquirer");
const fs = require("fs");

//question arrays

const questionManager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter their email'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?'
    },
    {
        type: 'list',
        name: 'whatNow',
        message: '',
        choices: ['1)Add an Engineer', '2)Add an Intern', '3)Finish My Team'],
    }
];
//Engineer questions
const questionEngineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Engineers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter their email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter the engineers github name'
    },
    {
        type: 'list',
        name: 'whatNow',
        message: '',
        choices: ['1)Add an Engineer', '2)Add an Intern', '3)Finish My Team'],
    }
];
//Intern questions
const questionIntern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter their email'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where did they go to school?'
    },
    {
        type: 'list',
        name: 'whatNow',
        message: '',
        choices: ['1)Add an Engineer', '2)Add an Intern', '3)Finish My Team'],
    }
];

var promptIntern = () => {
    inquirer.prompt(questionIntern)
        .then((answers) => {
            var choice = answers.whatNow.charAt(0);
            //write function to return html content
            if (choice = 1) {
                promptEngineer();
                choice = answers.whatNow.charAt(0);
            }
                else if(choice = 2){
                    promptIntern();
                    choice = answers.whatNow.charAt(0);
                }else {
                    writePage();
                }
        })
}

var promptEngineer = () => {
    inquirer.prompt(questionEngineer)
        .then((answers) => {
            var choice = answers.whatNow.charAt(0);
            //write function to return html content
            if (choice = 1) {
                promptEngineer();
                choice = answers.whatNow.charAt(0);
            }
                else if(choice = 2){
                    promptIntern();
                    choice = answers.whatNow.charAt(0);
                }else {
                    writePage();
                }
        })
}

var promptManager = () => {
    inquirer.prompt(questionManager)
        .then((answers) => {
            var choice = answers.whatNow.charAt(0);
            //write function to return html content
            console.log(choice);
            if (choice = 1) {
                promptEngineer();
                choice = answers.whatNow.charAt(0);
            }
                else if(choice = 2){
                    promptIntern();
                }else {
                    writePage();
                }
        })
};
promptManager();