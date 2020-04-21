const Web3 = require("web3");
const HDWalletProvider = require('truffle-hdwallet-provider');

const provider = new HDWalletProvider( //connect to target network and unlock account
  'speed tell turtle spring try direct maid portion final erase attitude release',
  'https://rinkeby.infura.io/v3/0e555da2ac9e47f596b78b40a8f57ba7'
);
const web3 = new Web3(provider);

module.exports = web3;
