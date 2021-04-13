import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';
import 'antd/dist/antd.css';
import Container from './components/Container';
import Home from './views/Home';
import History from './views/History';

const App = () => {
  return(
    <Router>
      <Provider store={store}>
        <Container>
          <Switch>
            <Route 
              exact 
              path="/"
            >
              <Home />
            </Route>
            <Route path="/history">
              <History />
            </Route>
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
};

export default App;
