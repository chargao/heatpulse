# HeatPulse: Urban Heat Resilience

A website for the Urban Heat Resilience capstone project from Climatebase fellowship cohort 6.

## Project Description

This map will be developed utilizing Python and mapping data to create a website where users can view live map information about urban heat zones in their area and ways to mitigate extreme heat.
As climate change continues to bring record temperatures across the globe, cities are often most hardest hit with temperature spikes.

These spikes can often lead to grid overloads causing black or brown outs, severe heat stroke or death in children, the elderly, or people susceptible to high heat. While cities are beginning to tackle this particular challenge of climate change, mapping of what exact locations are most at risk in cities has been lacking.

This project aims to showcase the areas of greatest concern in a city and enable politicians, city planners, and every day citizens where exactly should be the areas of greatest concern and be able to fix these problems with either nature based solutions or infrastructure updates that can help cities stay cool, and thus, reducing additional reliance on air conditioning and other greenhouse gas emitting cooling solutions.
The project is part of [ClimateBase's Cohort 6 Fellowship](https://climatebase.org/fellowship).

## Project Format

### Backend:

The backend folder contains a Python Flask backend that serves jinja templates. This was v1 of the app, and maintained here so that some of the HTML can be reused, as well as in case we want to start adding backend API calls to the frontend. 

To run the backend:
```
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask run
```

### Frontend:

The frontend folder contains a React frontend that serves the map. This is v2 and the current version of the app. It runs with [vite](https://vite.dev/), and currently doesn't have any external dependencies except for a [mapbox](https://www.mapbox.com/) integration.

To run the frontend:
```
cd frontend
npm install
npm run dev
```

Something you might run into is that the fingerprint.js file from lucide-react won't load in your browser, that's because the file is blocked by ad block software... you can just turn off ad block software for the site (localhost) for now, but we'll need to find a better solution for this.
