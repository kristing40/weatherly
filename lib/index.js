require('./normalize.css');
require('./style.css');
import React from 'react';
import reactDom from 'react-dom';
import Main from './components/Main';

reactDom.render(<Main/>, document.getElementById('application'));
