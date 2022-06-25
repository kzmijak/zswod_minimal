// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import './utils/highlight';
import 'react-quill/dist/quill.snow.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

//
import App from './App';
import { store } from './_zswod/redux/store';

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </ReduxProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
