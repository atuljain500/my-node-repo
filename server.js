import fs from 'fs/promises';

const content = await fs.readFile('./hello.txt', 'utf-8');

console.log(content)