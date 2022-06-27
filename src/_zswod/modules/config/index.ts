import appsettings from 'src/appsettings.json';

type Config = {
  backend: {
    baseURL: string;
  };
};

const config: Config = appsettings;

export { config };
