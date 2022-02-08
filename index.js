require('dotenv').config();
const Web3 = require('web3');

// Initiate new connection
const newWeb3Connection = new Web3(process.env.rpcURL)

// Address that Eth users use for burning tokens
const burningAddress = '0x000000000000000000000000000000000000dead';

// Check account balance
newWeb3Connection.eth.getBalance(burningAddress, (err, wei) => {
  // Second arg is the smallest denomination of ether
  if (err) {
    console.log("ERROR in getBalance: ", err)
  }
  // Convert wei to Ether with fromWei
  balance = newWeb3Connection.utils.fromWei(wei, 'ether');
  console.log(`Address: ${burningAddress} has a balance of ${balance} Ether`);
});
