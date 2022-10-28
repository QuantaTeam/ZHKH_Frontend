import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

import { HomeContext } from '../../context';

import { defaultMarker } from './defaultMarker';

import './styles/cluster.css';
import styles from './styles/map.module.scss';

const createClusterCustomIcon = function (cluster) {
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(33, 33, true),
  });
};

export const MapLayout = React.memo(() => {

  const { getAllLocations } = useContext(HomeContext);

  return (
    <div className={styles.map__container}>
      <h1>Custom Marker Cluster</h1>
      <MapContainer
        style={{ height: '500px' }}
        center={[55.754339720338024, 37.62283505324696]}
        zoom={10}
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
          {
            getAllLocations.data?.map((item, index) => (
              <Marker
                position={item.geo_coordinates}
                icon={defaultMarker}
                key={index}
              />
            ))
          }
          {/*          <Marker position={[55.846534, 37.432926]} icon={defaultMarker} >
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
*/}
        </MarkerClusterGroup>
      </MapContainer>
    </div >
  );
});