const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/MailFactory.json');

const provider = new HDWalletProvider( //connect to target network and unlock account
  'speed tell turtle spring try direct maid portion final erase attitude release',
  'https://rinkeby.infura.io/v3/71fbc418e811439bbc4940a45c33d80b'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '10000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};

deploy();
