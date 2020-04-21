const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');//can access file system

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const mailPath = path.resolve(__dirname, 'contracts', 'Mail.sol');
const source = fs.readFileSync(mailPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

console.log(output);
for (let contract in output) { //because contact and contractFactory
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract]
  );
}
