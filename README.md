# Moonchain DApp Starter

A comprehensive toolkit for developing decentralized applications (DApps) based on Ethereum. It integrates wallet connection, smart contract interaction, and modern frontend development tools, allowing you to quickly start building Web3 applications.

## Technology Stack

- **Frontend Framework**: Next.js 15.2.4 + React 19.1.0
- **Development Language**: TypeScript
- **Styling Solution**: Tailwind CSS
- **Web3 Integration**:
  - wagmi 2.15.2 (Ethereum React Hooks library)
  - ethers 6.14.0 (Ethereum JavaScript library)
  - @rainbow-me/rainbowkit (Web3 wallet connection UI library)
- **Smart Contracts**:
  - Solidity 0.8.24+
  - OpenZeppelin Contracts 5.3.0
- **Build Tools**:
  - pnpm (package manager)
  - harsta (compilation tool)
  - ESLint (code linting)

## Features

- 🔌 **Wallet Connection**: Simple and intuitive wallet connection experience using RainbowKit
- 📝 **Message Signing**: Demonstrates how to sign messages using the connected wallet
- 🔐 **Contract References**: Direct reference to contract code in the frontend based on harsta
- 🎨 **Modern UI**: Build beautiful user interfaces using HeroUI component library and Tailwind CSS
- 🔄 **Responsive Design**: Interfaces that adapt to various device sizes

## Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm 10.10.0 or higher

### Installation

```bash
# Clone repository
git clone <repository-url>
cd starter

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Visit http://localhost:3000 to view the application.

### Build

```bash
# Build production version
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
starter/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   ├── config/              # Configuration files
│   │   ├── addresses.json   # Contract address configuration
│   │   ├── wagmi.ts         # Wagmi configuration
│   │   └── fragments/       # GraphQL fragments
│   ├── contracts/           # Smart contracts
│   ├── layouts/             # Page layout components
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx         # Application entry
│   │   ├── index.tsx        # Home page
│   │   └── api/             # API routes
│   ├── store/               # State management
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
└── test/                    # Test files
```

## Smart Contracts

The project includes a simple ERC20 token contract with ownership functionality:

```solidity
// ERC20WithOwnable.sol
contract ERC20WithOwnable is ERC20, Ownable {
  constructor(address _owner, string memory _name, string memory _symbol) ERC20(_name, _symbol) Ownable(msg.sender) {
    _mint(_owner, 40000000 * 10 ** 18);
  }

  function mint(address account, uint256 amount) public onlyOwner {
    _mint(account, amount);
  }
}
```

## Development Guide

### Adding New Pages

Create new `.tsx` files in the `src/pages` directory. Next.js will automatically make them available as routes.

### Smart Contracts

1. Add or modify Solidity contracts in the `src/contracts` directory
2. Write test files in the `test` directory, run `pnpm harsta test` for testing
3. Write a `harsta.config.ts` file to configure contract compilation and deployment
4. Use `pnpm harsta deploy --network <network-alias>` to deploy contracts
5. Reference `@harsta/client` in pages to query or call contract methods

### Style Customization

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

## License

[MIT](LICENSE)
