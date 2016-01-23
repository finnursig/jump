import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import AddReport from './components/pages/AddReport';
//import AdminUsers from './components/pages/admin/Users';
import AdminRoutes from './routes/admin'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="add" component={AddReport} />
        {/*
        <Route path="admin">
            <Route path="users" component={AdminUsers} />
        </Route>
        */}
        {AdminRoutes}
    </Route>
);

// export default {
//     component: App,
//     childRoutes: [
//         {
//             path: '/',
//             component: Home
//         },
//         {
//             path: '/add',
//             component: require('./components/pages/AddReport')
//         },
//         AdminRoutes
//     ]
// }
