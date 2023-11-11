# Getting Started

run `npm install` to add the dependencies

### `npm run start`
Use this command to start up the project. The default port is 3000

### `npm run test`
This command will spin up the Jest test suite. Currently, not all of the components are covered. 
I have just set the boilerplate.


# There are 2 components
`Employee` and `EmployeeDetails`. These could be used by admins. As employees should not see the list of all of the employees and their details

I have added `EmployeeClient.js`, which mocks the API calls. 
The purpose of AccessLoader would have been to stop any unauthorized access. As well as, if the backend API doesn't provide the data, redirect to some common component.
