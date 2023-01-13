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


## Objective

The project is intended to be used for learning and practicing React concepts such as:

- Components, Props, State, Forms, Routes, Links, Icons.
- Context API, useContext hook
- APIs, HTTP Requests, and deployment using a variety of hostings.

Also, It implements changes introduced with `react-router-dom` v6 such as the replacement of Switch with Routes, in addition to other concepts that contribute to the development of full-stack projects.

### Technologies

* Concurrently, JSON-server, Render & Netlify

### More

More information can be found at: https://sandval.com/