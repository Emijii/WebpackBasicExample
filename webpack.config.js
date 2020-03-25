//Note: You need to install Node.js first.
//Then install Webpack using this command: npm install -g webpack.
//The bundle.js file gets created when you run "webpack" in the command prompt.
//Note: To get the "webpack" command to run, I had to install webpack and webpack-cli globally.
//npm install -g webpack
//npm install -g webpack-cli
//To run this code on a local server, install webpack-dev-server globally: npm install -g webpack-dev-server
//Then run: npm run start:dev

//Require statements are the Node.js defacto JavaScript dependency statements.
const webpack = require('webpack');
const path = require('path');

//Reference where we want to put our bundled JavaScript.
const APP_DIR = path.resolve(__dirname, '');
const BUILD_DIR = path.resolve(__dirname, 'build');

//Declare instructions on what Webpack should do.
const config = {
    entry: APP_DIR + '/HelloWorld.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config;