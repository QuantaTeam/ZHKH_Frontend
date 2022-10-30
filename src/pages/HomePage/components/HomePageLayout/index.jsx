import React from 'react';

import { FilterContainer } from '../../containers/filterContainer';

export const HomePageLayout = React.memo(() => {
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <FilterContainer />
    </div>
  );
});