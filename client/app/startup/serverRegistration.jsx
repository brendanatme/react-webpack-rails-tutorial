// Example of React + Redux
import ReactOnRails from 'react-on-rails';

import App from './ServerApp';
import store from '../store';

ReactOnRails.register({
  App
});

ReactOnRails.registerStore({
  store
});
