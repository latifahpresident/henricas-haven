import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Home from "./components/Home/Home"
import Layout from './utilities/layout/Layout';
import './App.css';


const App = () => {
  let routes = (
    <Switch>
             {/* <Route exact path='/services' component={Services}/> */}

      <Route exact path='/' component={Home}/>
    </Switch>
  )
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
