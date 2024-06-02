const fs = require('node:fs').promises;

const addFilesAtPosition = async function addFilesAtPosition(filePath, newFiles, position) {
    try {
        const data = await fs.readFile(filePath, 'utf8');

        const jsonData = JSON.parse(data);

        if (!Array.isArray(jsonData)) {
            throw new Error('Invalid JSON format: expected an array.');
        }

        const nonDuplicateFiles = newFiles.filter(newFile => 
            !jsonData.some(book => book.id === newFile.id)
        );

        if (nonDuplicateFiles.length === 0) {
            console.log('No new files to add.');
            return;
        }

        if (position === -1) {
            jsonData.push(...nonDuplicateFiles);
        } else {
            jsonData.splice(position, 0, ...nonDuplicateFiles);
        }

        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
        console.log('Files added successfully.');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

module.exports = { addFilesAtPosition };
