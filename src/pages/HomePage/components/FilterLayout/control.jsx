import React, { useContext } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import 'dayjs/locale/ru';

import { HomeContext } from '../../context';

import styles from './styles/filter.module.scss';

export const Control = () => {

  const {
    dateFrom,
    dateTo,
    setDateFrom,
    setDateTo,
  } = useContext(HomeContext);

  return (
    <div className={styles.control__container}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>

        <div className={styles.pickers__container}>
          <div className={styles.picker__from}>
            <DateTimePicker
              value={dateFrom}
              onChange={e => e?.$d && setDateFrom(e.$d)}
              renderInput={(params) => <TextField size="small"{...params} />}
            />
          </div>
          <div className={styles.picker__to}>
            <DateTimePicker
              value={dateTo}
              onChange={e => e?.$d && setDateTo(e?.$d)}
              renderInput={(params) => <TextField size="small"{...params} />}
            />
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
};