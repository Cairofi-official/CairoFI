// require("@nomicfoundation/hardhat-toolbox");
//
// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };


// import {HardhatUserConfig} from 'hardhat/config';
require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-verify');

const config = {
    solidity: "0.8.19",
    etherscan: {
        apiKey: {
            'blast sepolia': 'blast_sepolia', // apiKey is not required, just set a placeholder
        },
        customChains: [
            {
                network: 'blast sepolia',
                chainId: 168587773,
                urls: {
                    apiURL: 'https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan',
                    browserURL: 'https://testnet.blastscan.io'
                }
            }
        ]
    },
    networks: {
        blast_sepolia: {
            url: 'https://sepolia.blast.io',
            accounts: [process.env.PRIVATE_KEY]
        },
    },
};

module.exports = config;