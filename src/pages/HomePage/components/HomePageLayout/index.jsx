import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import L, { MarkerCluster } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { defaultMarker } from './defaultMarker';

const customIcon = new L.Icon({
  iconUrl: require('./location.svg').default,
  iconSize: new L.Point(40, 47),
});

// NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
// eslint-disable-next-line
const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(33, 33, true),
  });
};

export const HomePageLayout = React.memo(() => {

  return (
    <div>
      <h1>Custom Marker Cluster</h1>
      <MapContainer
        style={{ height: '500px' }}
        center={[38.9637, 35.2433]}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          onClick={(e) => console.log('onClick', e)}
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={true}
          polygonOptions={{
            fillColor: '#ffffff',
            color: '#f00800',
            weight: 5,
            opacity: 1,
            fillOpacity: 0.8,
          }}
          showCoverageOnHover={true}
        >
          <Marker position={[36.668754, 29.104185]} icon={defaultMarker} >
            <Popup className="request-popup">
              <div >
                <img
                  src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
                  width="150"
                  height="150"
                  alt="no img"
                />
                <div className="m-2" >
                  Success!
                </div>
                <span >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </span>
                <div className="m-2" >
                  Okay
                </div>
              </div>
            </Popup>
          </Marker>
          <Marker position={[40.587613, 36.944535]} icon={defaultMarker} />
          <Marker position={[40.614681, 43.121517]} icon={defaultMarker} />
          <Marker position={[38.357641, 38.328708]} icon={defaultMarker} />
          <Marker position={[41.051687, 28.987261]} title="a title" icon={defaultMarker} />
          <Marker position={[39.931841, 32.876713]} icon={defaultMarker} />
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
});