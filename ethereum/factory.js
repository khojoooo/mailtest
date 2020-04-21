const web3 = require('./test');
const CampaignFactory = require('./build/MailFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3e4F267C3307Bf483Fc5Aea506CFc93B53bE3B40'
);

module.exports = instance;
