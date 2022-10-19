require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.STAGING_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
};