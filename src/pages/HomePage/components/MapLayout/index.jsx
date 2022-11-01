import React, { useContext, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap, useMapEvent, useMapEvents } from 'react-leaflet';
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

function SetViewOnClick({ animateRef }) {
  const map = useMapEvents({
    click: (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      });
    },
    moveend: (e) => {
      //console.log(e);
    },
  });

  return null;
}

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
    map.setZoom(15);
  }, [lat, lng, map]);
  return null;
};

export const MapLayout = React.memo(() => {

  const { getAllLocations, getLocationByID, handleGetLocation } = useContext(HomeContext);

  const animateRef = useRef(true);

  return (
    <div className={styles.map__container}>
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
        <SetViewOnClick animateRef={animateRef} />
        {getLocationByID.data && getLocationByID.data['68'] && <RecenterAutomatically lat={getLocationByID.data['68'][0]} lng={getLocationByID.data['68'][1]} />}
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
            getAllLocations.data?.res?.map((item, index) => {
              if (item['68']) {
                <Marker
                  position={item['68']}
                  icon={defaultMarker}
                  key={index}
                  eventHandlers={{
                    click: () => {
                      //handleGetLocation(item.id);
                    },
                  }}
                >
                  <Popup className="request-popup">
                    <div >
                      <div className="m-2" >
                        {item['69']}
                      </div>
                    </div>
                  </Popup>
                </Marker>;
              } return null;
            })
          }
        </MarkerClusterGroup>
      </MapContainer>
    </div >
  );
});