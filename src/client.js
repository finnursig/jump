import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';

render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.getElementById('app'));
