import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import App from './App.tsx'

import '../src/styles/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>,
);

