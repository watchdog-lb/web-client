import React from 'react';

import {GoogleMap} from 'react-google-maps';

import './Map.css';
export default class Map extends React.Component {

    
    render() {
        return (
            <div>
                <GoogleMap containerProps={{
                  style: {
                    height: '100%',
                    width: '100%'
                  },
                }}
                ref="map"
                defaultZoom={10}
                defaultCenter={ {lat: 33.875464, lng: 35.6359222 }}
                >
              </GoogleMap>
            </div>
        );
    }
};