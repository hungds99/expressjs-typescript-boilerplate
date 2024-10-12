# Express.js TypeScript Boilerplate

This repository is a boilerplate for building applications using Express.js and TypeScript. It provides a solid foundation for developing scalable and maintainable server-side applications.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
- **Prettier**: Code formatter to ensure consistent code style.
- **Nodemon**: Utility that monitors for changes in your source and automatically restarts your server.
- **Jest**: Delightful JavaScript testing framework with a focus on simplicity.

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/hungds99/expressjs-typescript-boilerplate.git
   cd expressjs-typescript-boilerplate
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

The server will start on `http://localhost:3000`.

### Building the Application

To build the application for production, run:

```sh
npm run build
# or
yarn build
```

### Running Tests

To run tests, use:

```sh
npm test
# or
yarn test
```

## Project Structure

```
.
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   └── index.ts
├── tests
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── tsconfig.json
└── package.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
