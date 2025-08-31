# Project Utility Functions

This project is structured to demonstrate the creation of small, reusable utility functions and their corresponding unit tests using the Jest testing framework.

## Project Structure

The project has a simple, logical directory structure to separate the source code from the test files:

```
.
├── src/
│   └── utils.js
└── tests/
    └── utils.test.js
```

- **src/**: This directory contains the source code for the utility functions.
- **tests/**: This directory holds the unit tests for the functions. It mirrors the src directory to make it easy to find the tests for a specific file (e.g., `tests/utils.test.js` tests the code in `src/utils.js`).

## Setup and Running Tests

To run the tests for this project, you need to have Node.js and npm installed on your system.

### 1. Install Jest

If you haven't already, install Jest as a development dependency:

```bash
npm install --save-dev jest
```

### 2. Configure package.json

Add a script to your `package.json` file to easily run the tests:

```json
"scripts": {
  "test": "jest"
}
```

### 3. Run the tests

Execute the test script from your terminal:

```bash
npm test
```

Jest will automatically find all files ending with `.test.js` within the tests directory (or any directory) and run the tests, providing a summary of the results in your terminal.

## Getting Started

1. Clone or download this repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Add your utility functions to `src/utils.js`
5. Write corresponding tests in `tests/utils.test.js`
6. Run `npm test` to execute your tests

## Best Practices

- Keep utility functions small and focused on a single responsibility
- Write comprehensive test cases covering edge cases and error conditions
- Use descriptive test names that clearly indicate what is being tested
- Maintain the same directory structure pattern as your project grows
