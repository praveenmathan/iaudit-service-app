# iaudit-service-app

This is a set of APIs developed using serverless framework and will be deployed to aws lambda and will be accessed through an API gateway.

## Technology Stack
- serverless
- serverless-express
- aws-sdk
- serverless-offline
- serverless-webpack

## Prerequisites

- node 10+
- aws cli (optional)
- Connectivity to aws portal

## Local development

* Clone the project and change directory to project directory.
*  npm install
```bash
npm install
```
* Start the application locally 
```bash
    serverless offline --stage local
```
* Access the endpoint http://localhost:3000/local


###### AWS deployment - TODO
###### Unit and Integration testing - TODO
