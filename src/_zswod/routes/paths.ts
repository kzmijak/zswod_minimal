function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_APP = '/app';

// ----------------------------------------------------------------------

const PATH_HOME = {
  cloud: 'https://www.sketch.com/s/0fa4699d-a3ff-4cd5-a3a7-d851eb7e17f0',
  purchase: 'https://material-ui.com/store/items/minimal-dashboard/',
  dashboard: ROOTS_APP,
};

const PATH_APP = {
  root: ROOTS_APP,
};

export { PATH_HOME, PATH_APP, path };
