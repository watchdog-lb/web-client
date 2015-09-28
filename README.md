
Visualization environment of the collected data from the API.

Webpack is used to compile jsx and css into bundle.js 

```npm start``` will run a webpack-dev-server to test and run the app locally

### Usage

```
npm install
npm start
open http://localhost:3000
```

```generator.sh``` creates a component with boilerplate code following the conventions used in the project

Takes 2 arguments *fileName* *className*

Creates a folder *fileName* in ./src/components/  that has 3 files : 
    
    fileName.js
    fileName.css
    index.js

filename.js and index.js are prepopulated with functional code


### Linting

```
npm run lint
```