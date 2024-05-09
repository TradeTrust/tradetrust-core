require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        mnemonic: "indicate swing place chair flight used hammer soon photo region volume shuffle"
      }
    }
  },
  solidity: "0.8.4",
};

