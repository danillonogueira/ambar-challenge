import Home from './views/Home';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return(
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
