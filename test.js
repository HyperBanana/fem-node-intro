import fs from 'node:fs/promises'

const readPjson = async () => {
    const pjsonPath = process.cwd() + '/package.json';
    return JSON.parse(await fs.readFile(pjsonPath, 'utf8'));
}

// readPjson();


const writeFile =async  () => {
    const newFile = process.cwd() + '/demo.js';
    await fs.writeFile(newFile, `console.log('it writes!')`)
}

// writeFile();