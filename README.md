# Credit Card Application

This repository contains the source code for the Credit Card Validator Application, consisting of a Node.js API and a frontend UI.

## Prerequisites installations

- [Node.js](https://nodejs.org/) (v20 recommended)
- [Docker](https://www.docker.com/) & Docker Compose


## Running The Applications Locally  Development

If you need to run the services individually for development purposes:

### API

1.  Navigate to the API directory:

    cd credit-card-api

2.  Install dependencies:

    npm install

3.  Start the server:

    npm start

### UI

1.  Navigate to the UI directory:

    cd credit-card-ui
  
2.  Install dependencies:
   
    npm install

3. Run tests:
   
    npm run test

3. Compile application:
   
    npm run build
    
3.  Start the development server:
   
    npm run start
    

## Deploy Application Remot (Docker Compose)

The easiest way to run the application is using Docker Compose.

1.  **Start the services:**

    docker-compose up -d

3.  **Stop the services:**

    docker-compose down


3.  **Access the application:**
    - **UI:** http://ec2-16-170-220-220.eu-north-1.compute.amazonaws.com:8080/
    - **API:**http://ec2-16-170-220-220.eu-north-1.compute.amazonaws.com:3000/validate/49927398716



