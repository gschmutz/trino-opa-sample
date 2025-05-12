const fs = require('fs');
const path = require('path');

db = db.getSiblingDB('trino');

(async () => {
    // Path to the JSON file inside the Docker container
    const folderPath = '/data-transfer/mongo/attributes_data';

    // Get list of all (folder_name, file_name) pairs
    const folders = fs.readdirSync(folderPath);
    const files = folders.flatMap(folderName => {
        const subFolderPath = path.join(folderPath, folderName);
        const fileNames = fs.readdirSync(subFolderPath);
        return fileNames.map(fileName => [folderName, fileName]);
    });

    console.log(`fetched all files from the data folder | got ${files.length} files`);

    for (const [folderName, fileName] of files) {
        if (db.getCollectionNames().includes(folderName)) {
            db[folderName].drop();
            print(`Dropped existing collection: ${folderName}`);
        }
    }    

    // Insert each file into the corresponding collection
    for (const [folderName, fileName] of files) {
        const collection = db.getCollection(folderName);
        const filePath = path.join(folderPath, folderName, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const document = JSON.parse(fileContent);
        collection.insert(document);
        console.log(`inserted ${fileName} into ${folderName} collection`);
    }    

})();