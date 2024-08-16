<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Movies API</h3>

  <p align="center">
    A simple API that CRUD movies
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

To exercise RESTful API development with Express.

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- NPM
- MySQL

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:renatozr/movies-api.git
   ```
2. Enter the directory
   ```sh
   cd movies-api
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename .env.example file to .env
5. Fill in the environment variables (example below)
   ```sh
   PORT=3001
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_USER=root
   MYSQL_PASSWORD=password
   ```
6. Setup database
   ```sh
   npm run initdb
   ```
7. Run the project
   ```sh
   npm run dev
   ```
