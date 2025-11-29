// Importing necessary React modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importing global styles and main App component
import './index.css';
import App from './App.jsx';

// Importing Redux provider and store
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Selecting the root element in HTML to render the React app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Rendering the app inside StrictMode and Redux Provider 
root.render(
  <StrictMode>
    {/* Redux Provider makes the store available to all component */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
