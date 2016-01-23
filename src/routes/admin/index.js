import { Route } from 'react-router';

export default (
    <Route path="admin" getComponent={(location, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./components/Users'))
        });
    }} />
);
