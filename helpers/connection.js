require('dotenv').config();
const Web3 = require('web3');

const createConnection = () => {
  return new Web3(process.env.rpcURL);
};

const verifyArgs = (newWeb3Connection) => {
  let args;
  // Address for burning tokens
  const burningAddress = '0x000000000000000000000000000000000000dead';

  if (process.argv.length > 2) {

    const isValid = newWeb3Connection.utils.isAddress(process.argv[2]);
    
    if (isValid) {
      args = process.argv[2];
    } else {
      return undefined;
    }
  }
  return args ? args : burningAddress;
};

const getEtherBalance = (address, newWeb3Connection) => {
  return new Promise((res, rej) => {
    newWeb3Connection.eth.getBalance(address, (err, wei) => {
      // Second arg is the smallest denomination of ether
      if (err) {
        console.log("HERE")
        console.log("ERROR in getBalance: ", err)
        rej(err);
      }
      // Convert wei to Ether with fromWei
      balance = newWeb3Connection.utils.fromWei(wei, 'ether');
      res(balance);
    });
  })
};

module.exports = {
  createConnection, verifyArgs, getEtherBalance
};
