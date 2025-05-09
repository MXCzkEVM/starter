import type { Deploy } from 'harsta'
import process from 'node:process'
import { Wallet } from 'ethers'
import { defineConfig } from 'harsta'

const deploy: Deploy = {
  accounts: [
    process.env.DEPLOYER_PRIVATE_KEY || Wallet.createRandom().privateKey,
    process.env.VERIFIER_PRIVATE_KEY || Wallet.createRandom().privateKey,
  ],
  saveDeployments: true,
  allowUnlimitedContractSize: true,
  gas: 'auto',
  gasPrice: 'auto',
}

const config = defineConfig({
  paths: {
    sources: './src/contracts',
    config: './src/config',
  },
  solidity: {
    settings: { evmVersion: 'shanghai' },
    version: '0.8.24',
  },
  namedAccounts: {
    deployer: { default: 0 },
    verifier: { default: 1 },
  },
  networks: {
    moonchain_geneva: {
      name: 'Moonchain Testnet',
      rpc: 'https://geneva-rpc.moonchain.com',
      testnet: true,
      id: 5167004,
      icon: 'https://raw.githubusercontent.com/MXCzkEVM/metadata/main/logo-circle.svg',
      currency: { decimals: 18, name: 'MXC Token', symbol: 'MXC' },
      explorer: {
        name: 'etherscan',
        url: 'https://geneva-explorer.moonchain.com',
      },
      deploy,
    },
    moonchain: {
      name: 'Moonchain',
      rpc: 'https://rpc.mxc.com',
      id: 18686,
      icon: 'https://raw.githubusercontent.com/MXCzkEVM/metadata/main/logo-circle.svg',
      currency: { decimals: 18, name: 'MXC Token', symbol: 'MXC' },
      explorer: {
        name: 'etherscan',
        url: 'https://explorer.moonchain.com',
      },
      deploy,
    },
  },
  deployments: {
    ERC20WithOwnable: {
      kind: 'uups',
      args: async env => [
        await env.getNamedAccount('deployer') || await env.getUnnamedAccount(),
        'ERC20WithOwnable',
        'ERC20WithOwnable',
      ],
    },
  },
})

export default config
