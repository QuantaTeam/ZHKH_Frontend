import React, { useContext } from 'react';

import { MapContainer } from '../../containers/mapContainer';

import { FilterContext } from '../../context';

import { Control } from './control';
import { ListRequest } from './listRequest';

import styles from './styles/filter.module.scss';

export const FilterLayout = () => {

  return (
    <div className={styles.base__contetnt}>
      <div className={styles.filter}>
        <Control />
      </div>
      <div className={styles.map__range}>
        <ListRequest />
        <MapContainer />
      </div>
    </div>
  );
};