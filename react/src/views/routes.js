import React from 'react';

import {
  Startup as StartupView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <StartupView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}) => <StartupView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
