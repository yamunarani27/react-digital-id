import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import InfoComponent from './components/InfoComponent';
import AboutComponent from './components/AboutComponent';
import InterestComponent from './components/InterestComponent';
import FooterComponent from './components/FooterComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    <InfoComponent /> 
    <AboutComponent />
    <InterestComponent />
    <FooterComponent />
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
