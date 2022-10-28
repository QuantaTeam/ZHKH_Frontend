import React from 'react';

import { MapContainer } from '../../containers/mapContainer';;

export const HomePageLayout = React.memo(() => {
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <MapContainer />
    </div>
  );
});