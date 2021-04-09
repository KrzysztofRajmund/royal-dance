import React, { Component } from 'react';
//google map api
import { Map, InfoWindow, Marker, GoogleApiWrapper, mapEventHandler, markerEventHandler } from 'google-maps-react';
//components
import MapStyle from '../../mapStyle.json';

const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
};

export class MapContact extends Component<{ google: any }> {
    state = {
        showingInfoWindow: false, // Hides or shows the InfoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
    };



    // onMapClicked: mapEventHandler;
    // onMarkerClick: markerEventHandler;
    // onInfoWindowClose: any;
    // map?: google.maps.Map | google.maps.StreetViewPanorama


    onMarkerClick: markerEventHandler = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };

    render() {
        return (
            <div className='map'>
                <Map
                    google={google}
                    zoom={19}
                    // mapId='17ee4f6cc09b12e9'
                    style={mapStyles}
                    styles={MapStyle}
                    initialCenter={{
                        lat: 53.4417001,
                        lng: 14.5040757,
                    }}
                >
                    <Marker onClick={this.onMarkerClick}
                    // title or name={'Royal Dance'}
                    />
                    {/* <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow> */}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper((props) => ({
    apiKey: 'AIzaSyChMHOVn_yi5z3C9C0t9jWYe5kJqy17Hu0',
}))(MapContact);

// const GoogleMap = GoogleApiWrapper({
//     apiKey: 'AIzaSyChMHOVn_yi5z3C9C0t9jWYe5kJqy17Hu0'
// })(MapContact)

// export default GoogleMap;