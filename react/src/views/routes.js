import React from 'react';

import {
  Startup as StartupView,
  DesignCompany as DesignCompanyView
} from 'views';

const routes = [
  {
    path: '/Startup',
    renderer: (params = {}) => <StartupView {...params} />,
  },
  {
    path: '/Design',
    renderer: (params = {}) => <DesignCompanyView {...params} />,
  }
];

export default routes;
