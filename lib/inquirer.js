/**
 * A file generator like Yeoman-Generator, This is a test file sample
 * for file and directory generator.
 * 
 * @author Jao Austero
 * @version 1.0.0
 */

const chalk = require('chalk');
const inquirer = require('inquirer');
const TemplateSelector = require('./template-selector');

module.exports = {
    askName()
    {
        inquirer.prompt([
                {
                    type : 'list',
                    name : 'type',
                    message : 'What do you want to generate?',
                    choices: ['component', 'page', 'scss']
                },
            ])
            .then(answer => {
                if (answer.type === 'component')
                {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'filename',
                                message: 'What is the file name?'
                            },

                            {
                                type : 'list',
                                name : 'filetype',
                                message : 'Choose file type?',
                                choices: ['vue', 'js', 'jsx'],
                            },

                            {
                                type: 'confirm',
                                name: 'isFunctional',
                                message: 'Is this functional component?',
                            },
                        ])
                        .then(answer => {
                            console.log(
                                chalk.green(`Generating ${answer.filename}.${answer.filetype}`)
                            );

                            TemplateSelector.buildComponent(answer.filename, answer.filetype);
                        });
                }

                else if (answer.type === 'page')
                {
                    inquirer.prompt([
                        {
                            type: 'type',
                            name: 'pagename',
                            message: 'What is the name of the page?',
                        },

                        {
                            type: 'confirm',
                            name: 'hasChildren',
                            message: 'Does it have childrens?',
                        }
                    ])
                    .then(answers => {
                        console.log(
                            chalk.green(`Generating ${answers.pagename} page directory and files`)
                        );
                    });
                }

                else if (answer.type === 'scss')
                {
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'type',
                            message: 'Choose parent folder',
                            choices: ['base', 'components', 'elements', 'grid', 'helpers', 'layouts', 'pages', 'themes'],
                        },

                        {
                            type: 'input',
                            name: 'filename',
                            message: 'What is the file name?',
                        }
                    ])
                    .then(answers => {
                        console.log(
                            chalk.green(`Generating uis-${answers.filename}.scss under of ${answer.type} directory`)
                        );
                    });
                }
            });

        // return inquirer.prompt(questions);
    },
};
