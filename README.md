# Online Voting System Using BlockChain Technology

> This is a final year project for the IT Degree at MVSR Engineering College, Nagdergul.<br/>
> This project is developed by K. Nivas Teja, E. Rishwanth Reddy, C. Sumanth under the guidance of D.B.V Ravi Sankar.

### Requirements
- [Node.js](https://nodejs.org)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://github.com/trufflesuite/ganache-cli) (Cli)
- [Metamask](https://metamask.io/) (Browser Extension)

#### Getting the requirements
1. Download and install **NodeJS**

   Download and install **NodeJS** from [here].

1. Install **truffle** and **ganache-cli** using node packager manager (npm)

   ```shell
   npm install -g truffle
   npm install -g ganache-cli
   ```
1. Install **metamask** browser extension

### How to run this Project

1. Get into project Directory
    ```shell 
    cd "Online Voting System"
    ```

1. Run local Ethereum blockchain
    ```shell
    npx ganache-cli
    ```
    > Note: Do not close `ganache-cli` until termination of project

1. Import account(s) to `localhost8454` test network using private keys from ganache-cli to the metamask extension on the browser

1. Deploy smart contract
 ```shell
   # on the dVoting directory
   npx truffle migrate
   ```
1. Launch the development server (frontend)

   ```shell
   cd client
   npm install
   npm start
   ```
---

Made with ❤️ by NivasTeja, Rishwanth,Sumanth
---
Contact 

[![alt text][1.1]][1]
[![alt text][2.1]][2]

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)

[1]: https://twitter.com/NivasTeja00098
[2]: https://www.facebook.com/nivas.teja.5243


"# Online-Voting-System" 
