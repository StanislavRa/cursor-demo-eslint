# ESLint Demo Project

This is a sample project to demonstrate ESLint functionality. It includes JavaScript files with intentional linting errors to help you understand how ESLint works.

## Project Structure

```
eslint-demo/
├── .eslintrc.json      # ESLint configuration
├── package.json        # Project dependencies and scripts
├── src/
│   ├── index.js        # Main entry point with linting errors
│   ├── calculator.js   # Calculator utility with linting errors
│   └── user.js         # User utility with linting errors
└── README.md           # This file
```

## Common ESLint Errors Demonstrated

This project includes examples of:

- Incorrect indentation
- Quote style inconsistencies (single vs double)
- Missing semicolons
- Unused variables
- Console statements
- Unreachable code

## Setup and Usage

1. Install dependencies:

   ```
   npm install
   ```

2. Run ESLint to find errors:

   ```
   npm run lint
   ```

3. Run ESLint with auto-fix:

   ```
   npm run lint:fix
   ```

## Customizing ESLint

You can customize ESLint rules by editing the `.eslintrc.json` file. Refer to the [ESLint documentation](https://eslint.org/docs/latest/rules/) for available rules and options.
