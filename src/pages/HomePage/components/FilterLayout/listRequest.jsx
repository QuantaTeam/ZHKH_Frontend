import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import Checkbox from '@mui/material/Checkbox';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CircularProgress from '@mui/material/CircularProgress';

import { DateParseFullYear, TimeParse } from '../../../../hooks/dateParse';
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
    <div className={styles.list__component}>
      <div className={styles.list__reuest}>
        {getAllLocations.isLoading && <div className={styles.loader__container}><CircularProgress /></div>}

        {
          getAllLocations.data && <div className={styles.list__header}>
            <div className={styles.checkbox__container}>
              <CropSquareRoundedIcon />
            </div>
            <div className={styles.name}>
              Название дефекта
            </div>
            <div className={styles.data}>
              Дата создания
            </div>
            <div className={styles.update}>
              Последнее обновление
            </div>
            <div className={styles.address}>
              Адрес
            </div>
          </div>
        }
        {
          getAllLocations.data?.res?.map((item, index) => (
            <div className={styles.item} key={index} onClick={() => handleGetLocation(item['69'])}>
              <div className={styles.show__el}>
                <div className={styles.checkbox__container}>
                  <Checkbox
                    sx={{
                      '& .MuiSvgIcon-root': {
                        width: 20,
                        height: 20,
                      },
                    }}
                  />
                </div>
                <div className={styles.name}>
                  {item['18']}
                </div>
                <div className={styles.data}>
                  <div className={`${item['25'] === 'Обычная' && styles.color__purple} ${item['25'] === 'Аварийная' && styles.color__red} ${styles.status}`}>
                    <Brightness1Icon /> {item['25']}
                  </div>
                  <div className={styles.time}>
                    {DateParseFullYear(item['4'])} {TimeParse(item['4'])}
                  </div>
                </div>
                <div className={styles.update}>
                  <div className={`
                ${item['52'] === 'Выполнено' && styles.color__green} 
                ${item['52'] === 'Оказана консультация' && styles.color__yellow} 
                ${(item['52'] === 'Не выполнено по инициативе жителя' || item['52'] === 'Не выполнено по инициативе УК/ОО') && styles.color__light__red} 
                ${styles.status}
                `}>
                    <Brightness1Icon /> {item['52']}
                  </div>
                  <div className={styles.time}>
                    {DateParseFullYear(item['58'])} {TimeParse(item['58'])}
                  </div>
                </div>
                <div className={styles.address}>
                  {item['31']}
                </div>
              </div>
              {
                getLocationByID?.data && getLocationByID?.data['69'] === item['69'] && <div className={styles.hide__el}>
                  <div>
                    Заявка: {getLocationByID?.data['23']}
                  </div>
                </div>
              }
            </div>
          ))
        }
      </div >
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
    </div>
  );
};