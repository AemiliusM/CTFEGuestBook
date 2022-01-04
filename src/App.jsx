import { Router, Switch, Route } from 'react-router';
import { ProvideAuth } from './context/ProvideAuth';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout.jsx';
import Login from './views/Auth/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          </Layout>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
