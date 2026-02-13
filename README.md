# Credit Card Application

This repository contains the source code for the Credit Card Validator Application, consisting of a Node.js API and a frontend UI.

## Prerequisites installations

- [Node.js](https://nodejs.org/) (v20 recommended)
- [Docker](https://www.docker.com/) & Docker Compose


## Running The Applications Locally  Development

If you need to run the services individually for development purposes:

## CREDIT CARD VALIDATOR API

1.  Navigate to the API directory:

    cd credit-card-api

2.  Install dependencies:

    npm install

3.  Start the server:

    npm start

## CREDIT CARD VALIDATOR UI

1.  Navigate to the UI directory:

    cd credit-card-ui

2.  Update the enviromental variable in .env file:

    VITE_API_URL=http://localhost:3000/
  
3.  Install dependencies:
   
    npm install

4. Run tests:
   
    npm run test

5. Compile application:
   
    npm run build
    
6.  Start the development server:
   
    npm run start
    

## Deploy Application using Docker Compose
The easiest way to run the application is using Docker Compose.

1.  **Start the services:**

    docker-compose up -d

3.  **Stop the services:**

    docker-compose down


3.  Access the application

    CREDIT CARD VALIDATOR UI:   http://ec2-16-170-220-220.eu-north-1.compute.amazonaws.com:8080/
    CREDIT CARD VALIDATOR API:  http://ec2-16-170-220-220.eu-north-1.compute.amazonaws.com:3000/validate/49927398716

4. Monitor containers

    UPTIME KUMA: http://ec2-16-170-220-220.eu-north-1.compute.amazonaws.com:3001/
    PORTAINER: https://ec2-16-170-220-220.eu-north-1.compute.amazonaws.com:9443/


5. Test Application Health using Postman

   CREDIT CARD VALIDATOR API: http://16.170.220.220:3000/health

## AWS Service

I used the freee tier aws t3.micro ec2 as a deployment environemnt as well as our GitHub self-hosted runner.




