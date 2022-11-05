import React from 'react';

import { FilterContainer } from '../../containers/filterContainer';

import styles from './styles/homePage.module.scss';

export const HomePageLayout = React.memo(() => {
  return (
    <div className={styles.home}>
      <FilterContainer />
    </div>
  );
});