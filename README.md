# TEST PROJECT

This project is a test automation framework for the XYZ using Cypress. 

## Project Structure
- **cypress/**: Main folder for all Cypress-related files.
  - **e2e/**: Stores the end-to-end test files.
    - `careersPage.cy.js`: Test file for the careers page.
    - `homePage.cy.js`: Test file for the home page.
  - **fixtures/**: Contains static data.
    - `constants.js`: File with const values
  - **pages/**: Page Object Model (POM) implementation.
    - `CareersPage.js`: Page object representing the careers page.
    - `HomePage.js`: Page object representing the home page.
  - **plugins/**: Custom plugins for Cypress tests.
  - **results/**: Stores test results or output files.
    - `serbia_positions.txt`: Text file containing job positions data for Serbia.
  - **support/**: Contains custom commands and shared utilities.
    - `commands.js`: Custom Cypress commands to enhance reusability.
    - `e2e.js`: Common setup for end-to-end tests.js
- **cypress.config.js**: Configuration file for Cypress.
- **.github/workflows/**: Contains CI/CD configuration file.
  - `cypress-tests.yml`: GitHub Actions workflow to run Cypress tests

## Getting Started

### Requirements

- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AnaTodorov86/test-project.git
   ```
2. Navigate into the project directory:
   ```sh
   cd holycode-automation
   ```
3. Install the dependencies:
   ```sh
   npm i
   ```

### Running Tests

To execute all tests:

```sh
npx cypress run
```

To open Cypress in interactive mode:

```sh
npx cypress open
```

## License

This project is licensed under the MIT License.