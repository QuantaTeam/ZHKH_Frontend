import React, { useContext } from 'react';

import { HomeContext } from '../../context';

import styles from './styles/filter.module.scss';

export const ListRequest = () => {
  const {
    getAllLocations,
    handleGetLocation,
    getLocationByID,
  } = useContext(HomeContext);
  return (
    <div className={styles.list__reuest}>
      {
        getAllLocations.data?.map((item, index) => (
          <div className={styles.item} key={index} onClick={() => handleGetLocation(item.id)}>
            <div className={styles.show__el}>
              {item.id}
            </div>
            {
              getLocationByID?.data?.id === item.id && <div className={styles.hide__el}>
                <div>
                  Заявка: {getLocationByID?.data?.Описание}
                </div>
              </div>
            }
          </div>
        ))
      }
    </div >
  );
};