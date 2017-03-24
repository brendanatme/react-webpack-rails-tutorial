import ReactOnRails from 'react-on-rails';

import App from './App';
import store from '../store';

ReactOnRails.setOptions({
  // TRACE_TURBOLINKS set in webpack config
  traceTurbolinks: TRACE_TURBOLINKS // eslint-disable-line no-undef
});

ReactOnRails.register({
  App
});

ReactOnRails.registerStore({
  store
});
