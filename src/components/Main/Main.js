import { Route, Switch } from 'react-router-dom';
import Help from '../pages/help';
import App from '../App/App';
import History from '../pages/history';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/history" component={History} />
      <Route path="/help" component={Help} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default Main;
