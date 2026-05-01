# GitHub Profile Viewer

A simple HTML, CSS, and JavaScript project that allows searching GitHub users and displaying basic profile information.

[Live page link](https://carlab09.github.io/gitHub_profile_viewer/)

## Features

- Search for a user by GitHub username
- Display the avatar, name, bio, follower count, and following count
- Responsive interface with a clean design
- Error message when the user is not found

## Project structure

- `index.html` - main application page
- `src/css/` - application styles
  - `reset.css`
  - `styles.css`
  - `animations.css`
  - `responsive.css`
- `src/js/` - JavaScript logic
  - `gitHubAPI.js` - fetches data from the GitHub public API
  - `index.js` - handles search events and renders results
  - `profileView.js` - formats and displays the returned profile

## How to use

1. Open the `index.html` file in the browser.
2. Enter the GitHub username in the search box.
3. Click `Search`.
4. The profile will be loaded directly using the GitHub public API.

## Requirements

- Modern browser with ES6 module support
- Internet connection to access the GitHub API

## Notes

- This application uses the GitHub public API without authentication. For many requests in a short period, there may be rate limits.
- The project is entirely front-end and does not require a server or build tools.
