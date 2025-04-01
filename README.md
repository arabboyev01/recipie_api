# Express.js API

This is an Express.js API for managing recipes. It allows users to fetch available recipes and retrieve detailed information for a specific recipe.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/arabboyev01/recipie_api.git
   cd recipie_api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server

Start the Express server on port `3001`:
   ```sh
   npm start
   ```

The API will be accessible at `http://localhost:3001`.

## API Routes

### GET /api/recipes
Retrieves a list of available recipes with optional filters.

#### Example Request:
```sh
GET http://localhost:3001/api/recipes
```

### GET /api/recipes/:id
Retrieves detailed information about a specific recipe.

#### Example Request:
```sh
GET http://localhost:3001/api/recipes/123
```

## Dependencies
- Express.js
- Other dependencies as needed

## License
This project is licensed under the MIT License.

