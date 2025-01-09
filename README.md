# Junior Platform Engineer Assignment

This assignment is designed to evaluate your ability to improve developer workflows by implementing tools and automation commonly used in modern engineering teams.

Please aim to spend no more than **2-4 hours** on this task. If you’re unable to complete certain parts, don’t worry — provide details in your submission explaining what you would have done.

## Task Overview

Your goal is to enhance a basic Node.js/TypeScript project by implementing the following:

1. **Linting and Formatting:** Add [ESLint](https://eslint.org) and with use [Prettier](https://prettier.io) or [ESLint Stylistic](https://eslint.style) for code quality.
2. **Pre-commit Hooks:** Set up [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/lint-staged/lint-staged) to run linting/formatting before commits.
3. **Testing:** Configure [Vitest](https://vitest.dev) or [Jest](https://jestjs.io) and write a simple unit test.
4. **CI/CD Pipeline:** Set up [GitHub Actions](https://docs.github.com/en/actions) to automate linting, formatting checks, and tests on every push.

## Instructions

1. Checkout this repository.
2. Set up the tools and requirements described below.
3. Push your code to this repository.
4. Create a pull request to the `main` branch of this repository.

## Requirements

### 1. Linting and Formatting

- Add ESLint for linting and configure it for a TypeScript project.
- Add Prettier for formatting and ensure it doesn’t conflict with ESLint rules.
- Add scripts to the `package.json` to:
  - Run ESLint: `npm run lint`
  - Run Prettier: `npm run format`
  - Check formatting: `npm run format:check`

### 2. Pre-commit Hooks

- Set up `Husky` to trigger pre-commit hooks.
- Use `lint-staged` to run the following tasks:
  - Lint only the staged files with ESLint.
  - Format only the staged files with Prettier.

### 3. Testing

- Install Vitest or Jest for unit testing.
- Write a simple test case for the following function (create this file if needed):

```typescript
// src/add.ts
export function add(a: number, b: number): number {
  return a + b;
}
```

Add a script to `package.json` to run the tests:

```shell
npm run test
```

### 4. CI/CD Pipeline

- Create a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs the following jobs on every push:

  - Linting with ESLint.
  - Formatting check with Prettier.
  - Running the unit tests.

- Ensure the pipeline fails if any of the steps fail.

## Deliverables

Add a `README.md` to your repository explaining:

- How to set up the project locally.
- How to run linting, tests, and pre-commit hooks.
- A brief explanation of your GitHub Actions workflow.

## Evaluation Criteria

1. **Correctness:** Does the solution meet the requirements?
2. **Tooling Knowledge:** Proper setup of ESLint, Prettier, Husky, lint-staged, and testing tools.
3. **CI/CD Configuration:** A working GitHub Actions pipeline that automates checks.
4. **Code Quality:** Clean, readable, and well-documented code.
5. **Clarity:** A clear README that explains the setup and workflows.

## Optional Bonus (not required)

If you have extra time:

- Add [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and changelog generation.
- Add comments about additional improvements you’d make to enhance DX further.

## Time Expectation

This task is designed to take **2-4 hours**. If you run out of time, submit what you have along with notes about what you would improve.

## Submission

When you’re done, please send us the **GitHub repository link** along with any additional notes.

Good luck! 🚀

## Attention

You are strictly prohibited from disclosing the contents and answers of this examination on the web, GitHub, or any other platform.
Furthermore, the submitted pull requests will be used solely for evaluation during the selection process.
Once the selection process is completed, we will remove your access to this repository. Our company will not use your submission for any purposes other than the selection process.
