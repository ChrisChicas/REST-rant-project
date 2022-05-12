# REST-Rant Project

REST-rant is an app where users can review restautants. Reviews are displayed on a restautant's page while an overall rating is displayed in star form. Users are also able to create new restautants, update existing restautants, or even delete restautants if they so choose. Information that can be added/updated for restaurants can be seen while adding/updating restautants on the app itself, or below in this README.

## App Deployment:

- App Link on [Heroku](https://chrisc-rest-rant.herokuapp.com)


## App routes included:

| Method | Path | Purpose |
| :---: | :---: | :---: |
| GET | / | Home Page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/comment | Create a comment (or rant) about a particular place |
| DELETE | /places/:id/comment/:commentid | Delete a comment (or rant) about a particular place |
| GET | * | 404 page (matches any route not defined above) |


## - Places include:
- Name (string)
- City (string)
- State (string)
- Cuisines (string)
- Founded (number)
- Pic (string)
