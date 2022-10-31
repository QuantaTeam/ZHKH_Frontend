import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';

import { HomeContext } from '../../context';
import { FilterContext } from '../../context';

import styles from './styles/filter.module.scss';

export const ListRequest = () => {
  const {
    getAllLocations,
    handleGetLocation,
    getLocationByID,
  } = useContext(HomeContext);
  const {
    filterState,
    handleChangePagination,
  } = useContext(FilterContext);
  return (
    <div className={styles.list__reuest}>
      {
        getAllLocations.data?.res?.map((item, index) => (
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
      <div className={styles.pagination__container}>
        <Pagination
          shape="rounded"
          page={filterState.page}
          count={getAllLocations.data?.count_pages}
          onChange={handleChangePagination}
        />
      </div>
    </div >
  );
};