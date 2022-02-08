require('dotenv').config();
const Web3 = require('web3');

let args, burningAddress;
if (process.argv.length > 2) {
  args = process.argv[2];
}

if (!args) {
  // Address that Eth users use for burning tokens
  burningAddress = '0x000000000000000000000000000000000000dead';
}

// Initiate new connection
const newWeb3Connection = new Web3(process.env.rpcURL)



// Check account balance
newWeb3Connection.eth.getBalance(args ? args : burningAddress, (err, wei) => {
  // Second arg is the smallest denomination of ether
  if (err) {
    console.log("ERROR in getBalance: ", err)
  }
  // Convert wei to Ether with fromWei
  balance = newWeb3Connection.utils.fromWei(wei, 'ether');
  console.log(`Address: ${args || burningAddress} has a balance of ${balance} Ether`);
});
