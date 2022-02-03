import React from 'react';

import {
  Startup as StartupView
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <StartupView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <StartupView {...params} />,
  }
];

export default routes;
