const Web3 = require("web3");

let web3;
const provider = new Web3.providers.HttpProvider(
  "https://rinkeby.infura.io/v3/71fbc418e811439bbc4940a45c33d80b"
);
web3 = new Web3(provider);

module.exports = web3;
