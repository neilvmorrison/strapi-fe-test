import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../pages/Home';

const FourOhFour = () => <h1>BORKED</h1>;

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/404' component={FourOhFour} />
      <Redirect to='/404' />
    </Switch>
  );
};

export default Router;
