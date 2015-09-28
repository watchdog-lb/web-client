import React from 'react';
import { Paper } from 'material-ui'
import './About.css';

export default class About extends React.Component {
    render() {
        return (
            <Paper zDepth={2} rounded = {false} style= {{width : '80%', 'margin' : '0 auto', 'padding': '30px', 'marginTop' : '100px', 'color': '#2A2B2A' }}>
                
                <p >
                This is a project to crowd-source data of uncollected or dumped garbage sightings in Lebanon.  
                </p>

                <p>
                Any time you see garbage on the street, dumped in nature, use our app to upload a picture and add to our growing dataset or tweet about it with the hashtag #Fda7LDawleh and we will collect it, archive it and display it here for everyone to see.
                </p>

                <p>
                    The code and the data are public and readable by everyone.
                </p>

             </Paper>
        );
    }
}

