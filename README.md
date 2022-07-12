
# AVB Frontend Assesment

## User Story

As a user, I would like to be able to read a list of comments, add a comment, and see a list of the top 3 commenters.

### Summary
For this project, I've split up my work into 3 components, the main CommentUI listing out all comments, the TopCommenters section listing out the top 3 users with the most comments, and the CommentModal which allows a user to the site to add their name and comment to the list. I've stored comments in a new Redux Toolkit Slice named comment, in order for each component to have access to the comments, as well as post and get new comments that are added through the modal. This helps reduce prop drilling and having to store all data and methods related to commenting in a parent component. 

I wanted to use a variety of Material UI components to demonstrate my understanding of this library. In the main CommentUI, I am using Cards to group the comment with it's user as well as add some separation and a divider between comments to make it easier for the user to read. In the TopCommenters, I'm using a Table to render the top 3 commenters. Lastly, I'm using TextFields to handle the user input for the Add Comment modal. In order to keep track of the input, I'm utilizing useState to track the user's inputs before using Redux Toolkit's Dispatch to setComments globally. This allows the Top Commenters list to be dynamic based on any new comments being added.

Overall, this was my first time using Material UI and Redux Toolkit, but I enjoyed getting to understand and use them. As the project went on, they were much easier to understand and get used to. Typically in the past I have used sepearate CSS files to store styling needs, but with Material UI's makeStyles hook, it was even easier to read and keep track of any custom styling I was adding to the app without having to jump around to different files. This was also a good practice for me using Redux Toolkit and Slicing. Once I was able to understand how the Modal View was working, it was relatively easy to recreate that Slice for my comments. 

### Tasks

> Please add comments to help explain decisions and add a summary to the README

1) Use Material-UI theme for custom color scheme(primary and secondary colors)
2) Display list of comments
   1) Comment UI should consist of avatar(first initial or first + last initial), name, and comment
   2) `store/api` has mock comments
   3) Extra: fetch from API to display initial comments instead of mock comments
3) Facilitate adding a comment via modal with input fields(name and comment), and submit button
4) Display a list of top 3 commenters
   1) Ui should consist of avatar(same as above) name, and comment count
   2) Should be listed in descending order of comment count


### Useful Links

* https://v4.mui.com/
* https://redux-toolkit.js.org/
* https://jsonplaceholder.typicode.com/comments


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
