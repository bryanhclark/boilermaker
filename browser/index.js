import { Provider } from 'react-redux';
import store from './yourStore';
import '../public/stylesheets'

ReactDOM.render(
    <Provider store={store}>
        <div>Hello World!</div>
    </Provider>,
    document.getElementById('yourApp')
);