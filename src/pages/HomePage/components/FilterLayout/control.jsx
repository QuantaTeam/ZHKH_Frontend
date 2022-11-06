import React, { useContext } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import 'dayjs/locale/ru';
import Select from 'react-select';
import Switch from '@mui/material/Switch';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import SearchIcon from '@mui/icons-material/Search';

import { HomeContext } from '../../context';
import { FilterContext } from '../../context';

import { SelectStyles } from './styles/stylesSelect';
import styles from './styles/filter.module.scss';

export const Control = () => {

  const {
    getFilterData,
  } = useContext(HomeContext);

  const {
    filterState,
    handleChangeFilter,
    handleClearFilter,
  } = useContext(FilterContext);

  return (
    <div className={styles.control__container}>
      <div className={styles.search__container}>
        <SearchIcon />
        <input
          className={styles.search__field}
          placeholder='Дефект, Адрес, Округ, Район, УО, Исполнитель'
          onChange={e => handleChangeFilter(e.target.value, 'query')}
          value={filterState.query}
        />
        <button className={styles.search__btn}>
          <SearchIcon />
        </button>
      </div>
      <div className={styles.lists__container}>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.defect_category_name}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.defect_category_name}
            onChange={e => handleChangeFilter(e, 'defect_category_name')}
            placeholder='Выберите название категории'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.type_of_work_performed}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.type_of_work_performed}
            onChange={e => handleChangeFilter(e, 'type_of_work_performed')}
            placeholder='Выберите вид работы'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.district_name}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.district_name}
            onChange={e => handleChangeFilter(e, 'district_name')}
            placeholder='Район'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.name_of_the_management_company}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.name_of_the_management_company}
            onChange={e => handleChangeFilter(e, 'name_of_the_management_company')}
            placeholder='УО(для управляющей компании)'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.name_of_the_service_organization}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.name_of_the_service_organization}
            onChange={e => handleChangeFilter(e, 'name_of_the_service_organization')}
            placeholder='Компания исполнитель'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.quality_evaluation}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.quality_evaluation}
            onChange={e => handleChangeFilter(e, 'quality_evaluation')}
            placeholder='Оценка качества'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.source_name}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.source_name}
            onChange={e => handleChangeFilter(e, 'source_name')}
            placeholder='Источник'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.result_desc}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.result_desc}
            onChange={e => handleChangeFilter(e, 'result_desc')}
            placeholder='Результативность'
          />
        </div>
        <div className={styles.list__container}>
          <Select
            closeMenuOnSelect={false}
            value={filterState.urgency}
            styles={SelectStyles()}
            isMulti
            options={getFilterData.data?.urgency}
            onChange={e => handleChangeFilter(e, 'urgency')}
            placeholder='Срочность'
          />
        </div>
        <div className={styles.switch__container}>
          <div>Все</div>
          <Switch value={filterState.is_anomaly} onChange={e => handleChangeFilter(e.target.checked, 'is_anomaly')} checked={filterState.is_anomaly} />
          <div>Аномальные</div>
        </div>
      </div>
      <div className={styles.calendar__container}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
          <div className={styles.pickers__container}>
            <div className={styles.picker__from}>
              <DateTimePicker
                value={filterState.creation_timestamp_start}
                onChange={e => e?.$d && handleChangeFilter(e.$d, 'creation_timestamp_start')}
                renderInput={(params) => <TextField size="small"{...params} />}
              />
            </div>
            <div className={styles.picker__to}>
              <DateTimePicker
                value={filterState.creation_timestamp_end}
                onChange={e => e?.$d && handleChangeFilter(e.$d, 'creation_timestamp_end')}
                renderInput={(params) => <TextField size="small"{...params} />}
              />
            </div>
          </div>
        </LocalizationProvider>
        <button className={styles.clear__filter__btn} onClick={handleClearFilter}>
          <DeleteForeverRoundedIcon />
        </button>
      </div>
    </div>
  );
};