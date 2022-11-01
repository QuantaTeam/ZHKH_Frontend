import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';

import { HomeContext } from '../../context';
import { FilterContext } from '../../context';

import styles from './styles/filter.module.scss';

const useStyles = makeStyles({
  root: {
    '& .MuiPaginationItem-root': {
      color: '#4EC13C',
      fontWeight: '600',
    },
    '& .Mui-selected': {
      backgroundColor: '#4EC13C',
      color: '#fff',
    },
    '& .Mui-disabled': {
      backgroundColor: '#F3F3F3',
      color: '#BDBDBD',
      fontWeight: '600',
    },
  },
});

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
  const classes = useStyles();
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
      {
        getAllLocations.data?.res.length > 0 && <div className={styles.pagination__container}>
          <Pagination
            className={classes.root}
            shape="rounded"
            page={filterState.page}
            count={getAllLocations.data?.count_pages}
            onChange={handleChangePagination}
          />
        </div>
      }
    </div >
  );
};