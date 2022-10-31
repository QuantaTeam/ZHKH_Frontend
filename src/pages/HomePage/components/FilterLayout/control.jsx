import React, { useContext } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import 'dayjs/locale/ru';
import Select from 'react-select';
import Switch from '@mui/material/Switch';

import { HomeContext } from '../../context';
import { FilterContext } from '../../context';

import styles from './styles/filter.module.scss';

export const Control = () => {

  const {
    dateFrom,
    dateTo,
    setDateFrom,
    setDateTo,
    getFilterData,
  } = useContext(HomeContext);

  const {
    filterState,
    handleChangeFilter,
  } = useContext(FilterContext);

  return (
    <div className={styles.control__container}>
      <input
        className={styles.search__field}
        placeholder='Поисковый запрос'
        onChange={e => handleChangeFilter(e.target.value, 'query')}
      />
      <div className={styles.lists__container}>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.district_code}
            onChange={e => handleChangeFilter(e, 'district_code')}
            placeholder='Выберите код'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.defect_category_name}
            onChange={e => handleChangeFilter(e, 'defect_category_name')}
            placeholder='Выберите название категории'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.type_of_work_performed}
            onChange={e => handleChangeFilter(e, 'type_of_work_performed')}
            placeholder='Выберите вид работы'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.district_name}
            onChange={e => handleChangeFilter(e, 'district_name')}
            placeholder='district_name'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.name_of_the_management_company}
            onChange={e => handleChangeFilter(e, 'name_of_the_management_company')}
            placeholder='name_of_the_management_company'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.name_of_the_service_organization}
            onChange={e => handleChangeFilter(e, 'name_of_the_service_organization')}
            placeholder='name_of_the_service_organization'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.quality_evaluation}
            onChange={e => handleChangeFilter(e, 'quality_evaluation')}
            placeholder='quality_evaluation'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={getFilterData.data?.source_name}
            onChange={e => handleChangeFilter(e, 'source_name')}
            placeholder='source_name'
          />
        </div>
        <div className={styles.switch__container}>
          <div>Обычные</div>
          <Switch value={filterState.is_anomaly} onChange={e => handleChangeFilter(e.target.checked, 'is_anomaly')} />
          <div>Аварийные</div>
        </div>
      </div>
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