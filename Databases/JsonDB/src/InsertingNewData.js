const fs = require('node:fs').promises;

const addFileAtPosition = async function addFileAtPosition(filePath, newFile, position) {
    try {
        const data = await fs.readFile(filePath, 'utf8');

        const jsonData = JSON.parse(data);

        if (!Array.isArray(jsonData)) {
            throw new Error('Invalid JSON format: data is not an array.');
        }

        if (position === -1) {
            jsonData.push(newFile);
        } else {
            jsonData.splice(position, 0, newFile);
        }

        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
        console.log('File added successfully.');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

module.exports = { addFileAtPosition };
