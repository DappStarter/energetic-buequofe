require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million proof install clog front ten'; 
let testAccounts = [
"0xd4682e287f6c6d5dbfe4c381271b1d722d6ae4dd1eb6eff9a1f1287051faf795",
"0xf98bcd8a2488a2e98cafa6d5d6104ed513d653452a012329c47e1e8cbb589927",
"0xbeaeb50685a7e59c4b762de3da38b38001aaad0f8dd4247a281f914c92831777",
"0x2a5ed69a34ec3d1e8b6c504ce251436004c59a4a18e5b5e41c76b5a97920e8d5",
"0xbe1f90df9125929a50219fde793c983ac0286e3e184286a02bc1941d66e1f269",
"0x6125b59307f7dbfe1723912ae6ca9ae20092b1a70d510efba6418b2b618ad391",
"0xc0b2a4d020a2c705d0521a5ec5c64e30ae3fa6cae31b7f47ccba4c637e124233",
"0x0e8177d8349009091befd3223521ae6df573d74c957af56d4b8e80130e6856de",
"0xc78b7488ce04e05f0ca54dfd9c793fad428d60ae3690258146c42986d6dd4959",
"0x975bca10516fa9a69d7e0f2fe1c599ef532d52bcf4a611ba74a37ad914422bf9"
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

