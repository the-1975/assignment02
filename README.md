# Junior Platform Engineer Assignment

This project demonstrates how to set up a basic Node.js/TypeScript project with linting, formatting, testing, and CI/CD.

## Local Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Pre-commit Hooks
These checks run automatically when you try to commit your code:

Make changes: Modify the files you want to commit. (Husky detects this event)
Stage changes: Use git add to prepare your changes for commit (e.g., git add .).
Commit: Use git commit -m "Your commit message".

What happens behind the scene:
*   ESLint checks for code errors and style problems.
*   Prettier makes sure the code is formatted correctly.


## CI/CD workflow

### Linting
To lint the codebase, run the following command:

    ```bash
    npm run lint
    ```

### Formatting
To format the codebase, run the following command:

    ```bash
    npm run format
    ```

To check formatting, run the following command:

    ```bash
    npm run format:check
    ```
### Tests
To run the unit tests, use the following command:
```bash
npm run test


