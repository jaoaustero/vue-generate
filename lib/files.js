/**
 * A file generator like Yeoman-Generator, This is a test file sample
 * for file and directory generator.
 * 
 * @author Jao Austero
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

module.exports = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },
    
    directoryExists: (filePath) => {
        return fs.existsSync(filePath);
    }
}