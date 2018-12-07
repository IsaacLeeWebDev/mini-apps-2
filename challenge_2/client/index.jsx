import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App  beginningOfTimeStr="2010-07-17"
                      todayStr={`${(new Date().getFullYear())}-${sprintf('%02s', new Date().getMonth())}-${sprintf('%02s', new Date().getDate())}`} />,
                      document.getElementById('app'));