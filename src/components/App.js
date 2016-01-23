import './App.less';
import { Link } from 'react-router';

export default class App extends React.Component {
    render(){
        return (
            <div className="app">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/add">Add report</Link>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}
