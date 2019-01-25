[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

#Project Link
https://nathantbissell.github.io/final-project-frontend

My application used a react-auth-template created by General Assembly, and the [Express API Template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template). They both required both npm install and the download and unzip of these templates. After initializing a git repository, I deployed my express backend to Heroku and the frontend was deployed to Github pages.

# Frontend Routes (CRUD actions)
- View your team (requires an existing team ID): '/show-team'
- Update your team (requires existing team ID): '/update-team'
- Create a team (requires a team name): '/create-team'
- Delete a team (requires a existing team ID): '/delete-team'

All these routes included the authenticated route template that was given through General Assembly. These routes allowed us to pass user properties, and then allow us to pass a token in order to verify the user. 


# Authentication Routes:
- Sign up: '/sign-up'
- Sign in: '/sign-in'
- Change password: '/change-password'
- Sign Out of Application: '/sign-out'

# Additional Features

In addition to my first time using React, I installed a .csv file that automatically loaded 100 players into the database. However in the final version of this project with time constraints, this addition was ommitted in the final build. Instead of pushing a player array to a team, I used form fields to send data back and associate user generated players to a team.

# Planning

I was determined to use Express as my backend and React as my frontend library from the beginning. Even though I had little to no experience with Express during our previous group project, I felt more comfortable with the underlying Javascript language elements and promise chains that Express used. My first week before submission I wasted a lot of time trying to upload the .csv file, and I deviated away from my usual use of Trello to keep track of features that need to be worked on and improved. After initial submission, I went back and used Trello and more of the elements of React started to make sense, from there I was able to complete all CRUD actions. The app was originally inspired to have a Draftkings type format, where a user creates a set team consisting of actual players that have automatic dollar values. When you run out of positions or dollars to choose players, your team is complete. In future versions of this application I hope to incorporate those variables and re implement my .csv file

# Wireframe
<a href="https://imgur.com/PWwOkWq"><img src="https://i.imgur.com/PWwOkWq.jpg" title="source: imgur.com" /></a>


 # User Stories

- A user can create a team with a unique team name
- A user can edit players on their own team
- A user can choose players from a list of the players given to them by the rotoreact website
- A user has the ability to delete their team
- A user has the ability to edit their existing team name
- A user has the ability to edit their existing team players before a given contest
- A user will have the ability to make multiple entries of the same existing lineup with multiple teams




## Installation

1. [Download](../../archive/master.zip) this template.
1. Unzip and rename the template directory (`unzip ~/Downloads/ember-auth-template-master.zip`).
1. Move into the new project and `git init`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace `ga-wdi-boston.react-auth-template` in `package.json` with your
   projects name.
1. Replace the `"homepage"` field in `package.json` with your (public) Github
   account name and repository name.
1. Install dependencies with `npm install`.
1. `git add` and `git commit` your changes.
1. Run the development server with `npm start`.

## About

This template is derived from GA Boston's [react-template](https://git.generalassemb.ly/ga-wdi-boston/react-template).
Most of the development dependencies, such as linters, SCSS compiler, Webpack
config, NPM scripts, etc in this repo come from there.


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
