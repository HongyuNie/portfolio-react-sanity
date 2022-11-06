Reference: https://www.youtube.com/watch?v=NO7_jgzVgbc&list=WL&index=24

## Commands Sequence

### Create a react application

`npx create-react-app portfolio` 

open VScode build-in terminal, run `npm start`, will start on local:host 3000 in browser

### Building sanity studio

use plus sign open another terminal in VScode, run `npm install -g @sanity/cli`

run `sanity login` to log in sanity through terminal, log in with github

run `sanity init`, to initialize a new sanity project, name "studio", choose "Blog (schema)" template for this project. content will live in sanity studio.

`cd studio` to navigate into the sanity studio folder, then run `sanity start` 

connect sanity project and react project, create client.js under src folder

open a new terminal `npm install @sanity/client`

### Connect React App and Sanity Project

React to Sanity: create client.js under src folder

Sanity to React: manage.sanity.io, add URL http://localhost:3000 trusted URL while it making requests

### Progress saving

In .gitginore file, change `/node_modules` to `node_modules`

refresh on source control pages, 10k+ changes will change to only 21

### Set up tailwind

In index.css file, import tailwind and prose class, set up some customized style as well

### React Routing

`npm install react-router-dom`

notice the syntax might be different when set up the routing, navigate to
[React Documentation](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting) for more examples.


### Navbar component

`npm install react-social-icons` to install the react package for social icons in navbar.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
