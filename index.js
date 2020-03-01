/**
 * A file generator like Yeoman-Generator, This is a test file sample
 * for file and directory generator.
 * 
 * @author Jao Austero
 * @version 1.0.0
 */

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');

/**
 * Clear the cmd
 */
clear();

console.log(
    chalk.green(
        figlet.textSync('Vue-Generator!',
        {
            horizontalLayout: 'full',
        })
    )
);

const run = async() => {
    const question = await inquirer.askName();
};

run();
