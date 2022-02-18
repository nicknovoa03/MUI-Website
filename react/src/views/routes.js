import React from 'react';

import {
  Startup as StartupView,
  DesignCompany as DesignCompanyView
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <StartupView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <DesignCompanyView {...params} />,
  }
];

export default routes;
