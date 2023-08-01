# lifecycle-tests

This repository contains a web application for simulating bus routes. It uses Google Maps to plot the routes and provides a summary of each route. The routes are provided as CSV files, which are uploaded to the application. The application then geocodes the stops, calculates the route, adds markers to the map for each stop, and simulates the route.

## Project Structure

The main application directory is `app`, which contains:

- `src` subdirectory with TypeScript files, which are the main source code of the application.
- Configuration files for Jest (`jest.config.js`), TypeScript (`tsconfig.json`), and Webpack (`webpack.config.js`).

The `test_routes_csv` directory contains various CSV files, which might be used for testing or data input for the application. There's also a Python script (`create_folder_structure.py`) in this directory.

## TypeScript Files

Here's a brief summary of the main TypeScript files:

- `main.ts`: The main entry point of the application. It sets up event listeners and initializes the application.
- `upload.ts`: Handles the uploading of a CSV file and parses the CSV data into a JavaScript object.
- `googleMaps.ts`: Plots a route on a Google Map. It gets the geocode results for the bus stops, calculates the route, displays a summary of the route, and adds markers to the map for each stop.
- `globalData.ts`: Defines a global variable to store the route data. It provides two functions to set and get the route data.
- `routeSimulation.ts`: Simulates a bus route. It retrieves the route data, initializes necessary variables, maps the end time from the route to the stops, and defines functions to update the route status panel and animate the shuttle to the next stop.

## TypeScript Interfaces

- `BusStop`: Represents a bus stop with properties like name, end time, end address, latitude, and longitude.
- `BusRouteData`: Represents the data for a bus route, which includes an array of `BusStop` objects and a `google.maps.DirectionsRoute` object.
- `ShuttleStop`: Represents a shuttle stop with properties like name, latitude, longitude, and end time.

## Test Files

The `__tests__` directory contains unit tests for the application. The `dateFormatter.test.ts` file contains tests for the `formatTime` and `parseTimeStringToDate` functions in the `dateFormatter.ts` file. These tests ensure that the date formatting and parsing functions work correctly, which is crucial for the correct operation of the route simulation.

# Testing Strategy

This project follows a robust testing strategy to ensure the quality and correctness of the code. It uses a combination of unit tests, integration tests, and end-to-end tests.

## User Stories and JIRA Tickets

The development process starts with user stories, which are used to create JIRA tickets. Each ticket includes acceptance criteria that the implemented feature must meet.

## Unit Tests

Unit tests are written using Jest. They test individual functions and components in isolation to ensure that they work correctly under a variety of conditions. The `__tests__` directory contains the unit tests for the application.

## Behavior Driven Development (BDD)

Behavior Driven Development (BDD) is used for end-to-end and integration tests. These tests ensure that the application works correctly as a whole and that all components interact with each other as expected.

## Cypress and Gherkin

Cypress is used for writing end-to-end tests, with Gherkin-like syntax for feature files. This allows for writing tests in a way that's easy to understand, even for non-technical stakeholders. This makes it easier to ensure that the application meets the requirements and behaves as expected.


