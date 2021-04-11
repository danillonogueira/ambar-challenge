import React from 'react';
import Home from './views/Home';
import History from './views/History';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from './store';
import Container from './components/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Provider store={store}>
        <Container>
          <Switch>
            <Route exact path="/">
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
