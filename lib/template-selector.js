/**
 * A file generator like Yeoman-Generator, This is a test file sample
 * for file and directory generator.
 * 
 * @author Jao Austero
 * @version 1.0.0
 */

const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

module.exports = {
    buildComponent(filename, filetype)
    {
        fs.mkdirSync(`./src/components/${filename}`);

        // Compile template
        const compiled = fs.readFileSync('./lib/blueprints/component/template.ejs', 'utf-8')
        const template = ejs.render(compiled, {filename: filename});

        fs.writeFileSync(`./src/components/${filename}/uis-${filename}.${filetype}`, template, 'utf8');
    }    
};
