import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/index.css';
import App from '@containers/App';
import {Provider} from "react-redux";
import ThemeProvider from "./Context/ThemeProvider";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>

        </Provider>
    </React.StrictMode>
);

