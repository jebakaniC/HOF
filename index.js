import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HigherOrderComponent from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HigherOrderComponent />
//   </React.StrictMode>
// );

ReactDOM.render(<HigherOrderComponent/>,document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
