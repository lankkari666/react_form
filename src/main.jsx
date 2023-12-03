import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppRhfyp from './App.rhfyp.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<AppRhfyp />
	</React.StrictMode>,
);
