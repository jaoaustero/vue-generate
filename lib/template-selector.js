/**
 * A file generator like Yeoman-Generator, This is a test file sample
 * for file and directory generator.
 * 
 * @author Jao Austero
 * @version 1.0.0
 */

const fs = require('fs');
const ejs = require('ejs');
const chalk = require('chalk');

module.exports = {
    buildComponent(filename, filetype, functional)
    {
        fs.mkdirSync(`./src/components/${filename}`);

        // Component file
        const component = fs.readFileSync('./lib/blueprints/component/component.ejs', 'utf-8');
        const componentRender = ejs.render(component, {
            filename: filename,
            isFunctional: functional,
        });
        fs.writeFileSync(`./src/components/${filename}/uis-${filename}.${filetype}`, componentRender, 'utf8');

        // Readme file
        const readme = fs.readFileSync('./lib/blueprints/component/Readme.ejs', 'utf-8');
        const readmeRender = ejs.render(readme, {filename: filename});
        fs.writeFileSync(`./src/components/${filename}/Readme.md`, readmeRender, 'utf8');

        // Log
        console.log(chalk.green(`${filename} component has been generated!`));
    }    
};
