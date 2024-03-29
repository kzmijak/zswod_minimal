// scroll bar
import 'simplebar/src/simplebar.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-18-image-lightbox/style.css';
import './utils/highlight';
import 'react-quill/dist/quill.snow.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

import App from './App';
import { store } from './_zswod/redux/store';
import { ConfigProvider } from './_zswod/modules/Config';
import { AxiosProvider } from './_zswod/modules/Axios';
import { JwtProvider } from './_zswod/modules/User';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <ConfigProvider>
        <JwtProvider>
          <AxiosProvider>
            <SettingsProvider>
              <CollapseDrawerProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </CollapseDrawerProvider>
            </SettingsProvider>
          </AxiosProvider>
        </JwtProvider>
      </ConfigProvider>
    </ReduxProvider>
  </HelmetProvider>
);
