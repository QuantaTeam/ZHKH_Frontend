import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from 'framer-motion';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

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

  const variants = {
    open: {
      opacity: 1,
      height: 'auto',
      visibility: 'visible',
      display: 'block',
    },
    closed: {
      opacity: 0,
      height: 0,
      visibility: 'hidden',
      transitionEnd: { display: 'none' },
    },
  };

  const variantsArrow = {
    open: { transform: 'rotate(0deg)' },
    closed: { transform: 'rotate(180deg)' },
  };

  return (
    <div className={styles.list__component}>
      <div className={styles.list__reuest}>
        {getAllLocations.isLoading && <div className={styles.loader__container}><CircularProgress /></div>}

        {
          getAllLocations.data && <div className={styles.list__header}>
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
                <motion.div
                  initial={'open'}
                  animate={getLocationByID.data && getLocationByID?.data['69'] === item['69'] ? 'closed' : 'open'}
                  transition={{ duration: 0.3 }}
                  variants={variantsArrow}
                  className={styles.svg__container}
                >
                  <KeyboardArrowDownRoundedIcon />
                </motion.div>
                <div className={styles.name}>
                  <div className={styles.text}>
                    {item['18']}
                  </div>
                  {item['70'] && <ErrorOutlineRoundedIcon />}
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
                getLocationByID?.data && getLocationByID?.data['69'] === item['69'] && <motion.div
                  className={styles.hide__el}
                  initial={'closed'}
                  animate={getLocationByID?.data['69'] === item['69'] ? 'open' : 'closed'}
                  transition={{ duration: 0.3 }}
                  variants={variants}
                >
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Наименование дефекта
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['18'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Срочность
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['25'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Категория дефекта
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['15'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Управляющая организация
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['37'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Организация исполнитель
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['38'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Уникальный номер обращения
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['3'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Адрес
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['31'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Район
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['29'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Округ
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['27'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Описание дефекта
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['18'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Имя создателя заявки
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['8'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Отзыв
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['62'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Комментарии
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['14'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Пользователь внесший последние изменения
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['12'] || 'Отсутствует'}
                    </div>
                  </div>
                  <div className={styles.item__data}>
                    <div className={styles.name}>
                      Признак дефекта возврата на доработку (причина)
                    </div>
                    <div className={styles.data}>
                      {getLocationByID?.data['22'] || 'Отсутствует'}
                    </div>
                  </div>
                </motion.div>
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