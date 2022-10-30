import React from 'react';

import { MapContainer } from '../../containers/mapContainer';

import { Control } from './control';
import { ListRequest } from './listRequest';

import styles from './styles/filter.module.scss';

export const FilterLayout = () => {
  return (
    <div className={styles.base__contetnt}>
      <div className={styles.filter}>
        <ListRequest />
        <div className={styles.map__range}>
          <Control />
          <MapContainer />
        </div>
      </div>
    </div>
  );
};