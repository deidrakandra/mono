# Mono repo for NDA library, ui and demo app 

For library usage and documentation see   
http://nda-style-guide.s3-website-us-east-1.amazonaws.com
   


## Development server

Run `npm run dev` for a dev server. This builds `nda-angular` then runs `ng serve`.   
Run `npm run start` to build `nda-angular` and `nda-ui` then run `ng serve`.   
    
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the demo source files. Does not watch library changes.

## Build

Run `npm run build:all` to build the project. The build artifacts will be stored in the `dist/` directory. This runs a production build.

## Running unit tests

Run `npm run test:sg` to execute the unit tests via [Karma](https://karma-runner.github.io) for the demo app.   
Run `npm run test:lib` to execute the library tests

## Package

Run `npm run pack:all` to package the three libraries.   

## Deploy 
##### Ones script to increase version, publish to Nexus & update style guide site
For patch deploy, use `npm run deploy:patch`   
For minor deploy, use `npm run deploy:minor`   
For major deploy, use `npm run deploy:major`   

## Publish Only
Run `npm run publish:all` to publish to Nexus  
Run `npm run publish:all:patch` to publish to Nexus and increase version