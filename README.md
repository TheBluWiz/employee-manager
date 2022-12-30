
  # Employee Manager [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
  This Content Management System (CMS) allows for the creation and upkeep of department, role, and employee data via the command line. The information is stored in a database, but the CMS streamlines data access for non-developers.
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Walkthrough Video](#WalkthroughVideo)
  - [Moving Forward](#MovingForward)
  - [Contributing](#Contributing)
  - [Questions](#Questions)
  - [License](#License)
  ## Installation
  The database must first be created using the schema file. From the projects directory, open mySQL and run 'SOURCE db/schema.sql'. Run 'npm i' from the command line to install dependencies. To start the program, run 'node index.js'.
  ## Usage
  Command line prompts ask for user input and then update the database.
  ## Walkthrough Video


https://user-images.githubusercontent.com/88697112/208800046-1eb99a49-5287-4131-b5de-498721ae4e24.mov


  
  ## Moving Forward
  Additional features to come:
  - Update employee managers
  - View employees by manager
  - View employees by department
  - Delete departments, roles, and employees
  - View the total utilized budget of a department (the combined salaries of all employees of a department)
I would also like to include error reporting and guidance. At present this is most critical when establishing the database. Currently the program crashes in the following circumstances.
  - Attempting to add role when there are no departments
  - Attempting to add employee when there are no roles

  If a company were to actually choose to implement this software, I would love to update it to include payroll information. There are many situational variables for this that differ state to state that would need to be considered prior to development. Lets collaborate!!
  ## Contributing
  I'm always open to bug fixes or feature reccomendations. Feel free to fork the repo and then submit a pull request with your code. You can also reach me at the email in the questions section below to collaborate.
  ## Questions
  If you would like to contact me or view other projects I'm working on, you can explore my repositories at [theBluWiz](https://github.com/theBluWiz), or email me at thebluwiz@icloud.com.
  ## License
  This project is under the MIT license attached in the repository.
