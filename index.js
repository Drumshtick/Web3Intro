const { createConnection, getEtherBalance, verifyArgs } = require('./helpers/connection');

// Initiate new connection
const newWeb3Connection = createConnection();

const address = verifyArgs(newWeb3Connection);

if (!address) {
  console.log("Invalid address");
  console.log("Ensure wallet address is valid");
  return;
}


// Check account balance
getEtherBalance(address, newWeb3Connection)
  .then(result => {
    console.log(`Address: ${address} has a balance of ${result} Ether`);
  })
  .catch(err => {
    console.log("Error getting Ether Balance for supplied address: ", address);
    console.log("Error: ", err);
    return;
  });


