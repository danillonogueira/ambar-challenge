import Home from './views/Home';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store';
import Container from './components/Container';

const App = () => {
  return(
    <Provider store={store}>
      <Container>
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
