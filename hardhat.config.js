require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerly: {
      url: process.env.STAGING_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
};