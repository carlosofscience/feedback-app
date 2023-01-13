# feedback-app
React Project to leave a review for products and services.

## Available Scripts

In the project directory, you can run:

### `npm run jserver`

use to run a JSON server working as our temporary testing API, and handle crud operations for the feedback data. 

    "jserver": "json-server --watch db.json --port 5000",

### `npm run dev`

uses concurrently to combine the functionality of `npm run jserver` and add hot reload to the react page after making any changes to the code.

    "dev": "concurrently \"npm run jserver\" \"npm start\""


## Objectives

The objective of this project was to learn and practice React concepts such as:

- Components, Props, State, Forms, Routes, Links, Icons.
- Context API, useContext hook
- APIs, HTTP Requests, and deployment using a variety of hostings.

The project also implements changes introduced with `react-router-dom` v6 such as the replacement of Switch with Routes, in addition to other concepts that will be helpful to develop the frontend of future full-stack projects.

### Technologies

* Concurrently, JSON-server, Render & Netlify

### More

More information can be found at: https://sandval.com/