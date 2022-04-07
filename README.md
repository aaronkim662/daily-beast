# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npx nodemon server/gif-api.js`

This command will run the backend node js file. This is the file making the api call to Giphy API.

It requires a API key. You can acquire a key at https://developers.giphy.com/, sign up and go to the dashboard.

At the root of this directory, create a .env file. On the first line put REACT_APP_GIPHY_KEY='YOUR API KEY HERE'

### `npx cypress open`

Running this command in your terminal will launch Cypress Test Runner.
To test the functionality of the app, be sure to have ran the previous commands