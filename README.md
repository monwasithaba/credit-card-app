# Credit Card Application

This repository contains the source code for the Credit Card Validator Application, consisting of a Node.js API and a frontend UI.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 recommended)
- [Docker](https://www.docker.com/) & Docker Compose

## Running Locally (Docker Compose)

The easiest way to run the application is using Docker Compose.

1.  **Start the services:**

    ```bash
    docker-compose up -d
    ```

2.  **Access the application:**
    - **UI:** [http://localhost:8080](http://localhost:8080)
    - **API:** [http://localhost:3000](http://localhost:3000)

3.  **Stop the services:**

    ```bash
    docker-compose down
    ```

## Running Locally (Manual Development)

If you need to run the services individually for development purposes:

### API

1.  Navigate to the API directory:

    cd credit-card-api

2.  Install dependencies:

    npm install

3.  Start the server:

    npm start

    ```

    ```

### UI

1.  Navigate to the UI directory:
    ```bash
    cd credit-card-ui
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```
