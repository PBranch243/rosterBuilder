const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//empty array to hold employee info
const employeeArray = [];
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
var writePage = ()=>{
    console.log(employeeArray);
}

var whatNow = (choice) => {
    //var choice = answers.whatNow.charAt(0);
    //write function to return html content
    if (choice === '1') {
        promptEngineer();
        //choice = answers.whatNow.charAt(0);remove/unneccessary
    }
    else if (choice === '2') {
        promptIntern();
        //choice = answers.whatNow.charAt(0);
    } else {
        writePage();
    }
}
var promptIntern = () => {
    inquirer.prompt(questionIntern)
        .then((answers) => {
            //what to do with the answeres here
            var intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeArray.push(intern);
            whatNow(answers.whatNow.charAt(0));

        })
}

var promptEngineer = () => {
    inquirer.prompt(questionEngineer)
        .then((answers) => {
            //what to do with the answeres here
            var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeeArray.push(engineer);

            whatNow(answers.whatNow.charAt(0));
        })
}

var promptManager = () => {
    inquirer.prompt(questionManager)
        .then((answers) => {
            //what to do with the answeres here
            //use answer to create and instance of MGR
            //store in array
            var manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            //now that you have an instance, store in array for later use
            employeeArray.push(manager);

            whatNow(answers.whatNow.charAt(0));
        })
};
promptManager();