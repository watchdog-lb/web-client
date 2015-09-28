#!/bin/bash

# Quick Script to generate component with boilerplate
mkdir -p ./src/components/$1

touch ./src/components/$1/$1.css

touch ./src/components/$1/$2.js

#Going to call the main file index for better readability in imports
touch ./src/components/$1/index.js

echo "
import React from 'react';
import './$2.css';
export default class $2 extends React.Component {
    render() {
        return (
            <div>
                $2
            </div>
        );
    }
}
" > ./src/components/$1/$2.js

echo "
import $2 from './$2.js'
export default $2
" > ./src/components/$1/index.js