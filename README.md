![Ambar Logo](https://media-exp1.licdn.com/dms/image/C4E0BAQHaeaoUKL7CkQ/company-logo_200_200/0/1612379609051?e=2159024400&v=beta&t=HSuR1KOqkIy-sLmXjpPFfJIhAWBCg536TkAd_GPWqnY)
# Ambar Challenge
## Aim
Project for a front-end software engineer position at [Ambar](https://www.ambar.tech/). The project consisted in a temperature data fetching app. It had to provide the user with the fetching and displaying of temperature data of three cities. 

The applicant was free to choose any city he wanted, so the ones this project covers are Ribeirão Preto/SP, Araraquara/SP and São Carlos/SP, being all of them located in Brazil. 

The API that the project makes use of to get data is [OWM](https://openweathermap.org/api). It also takes an integration with a [Realtime Database](https://firebase.google.com/docs/database) through [Firebase](https://firebase.google.com/), given that data persistence and realtime UI updates were both requirements of the challenge.

As for design specs, the developer was allowed to style the UI as they saw fit. For this purpose, Styled Components was used and also Ant Design, a React components library that Ambar seems to implement in the front-end.
## Technologies
* JavasScript (ES6)
* React
* Redux
* Redux Saga
* Firebase
* Axios
* Styled Components
## Requirements


* [Node.js](https://nodejs.org/en/)
* [OWM](https://openweathermap.org/) (API key)
* [Firebase Realtime Database](https://firebase.google.com/) (API key and project URL)

## Running the project
### Clone or download this repository, navigate to project root and install dependencies:
```$ npm install```
### Configure the environment:

Create a ```.env``` file **in the root directory** and add the following variables with their respective values:

```
REACT_APP_OWM_KEY=YOUR_OWM_API_KEY
REACT_APP_FIREBASE_KEY=YOUR_FIREBASE_API_KEY
REACT_APP_DATABASE_URL=YOUR_FIREBASE_PROJECT_URL
```
### Running in development environment
```$ npm start```
> The app will be available at port 3000.
### Building for production
```$ npm run build```
### Running a local build
Install [serve](https://www.npmjs.com/package/serve), a static web server package:


```$ npm install serve -g```

Serve the local build:


```$ serve -s build```
> The app will be available at port 5000.
## Reaching out to me
dnll_nog@yahoo.com

+55 (66) 99919-6487
