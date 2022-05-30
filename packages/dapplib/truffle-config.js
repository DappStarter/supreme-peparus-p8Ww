require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note screen puppy gesture neck fresh gaze'; 
let testAccounts = [
"0xc119aef48bfcf4038e60d1263e9fef12e8cbe58e808e5c77d11309bfe9f4ac70",
"0xb884586f19b573b20608e7c41fad636a71746a040021d577ff06388e27d398a1",
"0x405140734f7db79ff0197efee8214e011fc55d5f95c2294c05a0a34820292272",
"0x743dd2dcb992e4521ba29fec06c31f4c5cd4addf6a7fa07d70e6221859e87426",
"0x783ac383d5a09cf6e42c8e68a58aac0d26cf737217e344ad4f6a8c0f94f20904",
"0x36867740221ebc926da38a90693a92a04004dfd013191a7ae905f3b937c78cde",
"0xe884be34239856cf65899cab9c6a13f33da9f272cd3866c4f8f5653de47ca00d",
"0x6c73fa4a6a592baf1610c6e956bba0f5cd5115f7c92d6b1b467c7829c32df46c",
"0x061a2ba40415a85c3940590207ff8e88418552beba6b5c361e91572182d29abc",
"0xd398834bfc33a198636fe1e0fcb8129876f2f10915c5d34ddbaf003ea09d232f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

