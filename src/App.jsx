import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from './context/ProvideAuth';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout.jsx';
import Login from './views/Auth/LoginAuthentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
            {/* {<h1>Login</h1>} */}
          </Route>
          <PrivateRoute exact path="/">
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
