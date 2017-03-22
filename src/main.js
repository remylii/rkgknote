/* @flow */
import MyFoo from './foo';

import '../styles/main.css';

document.getElementById('main').innerHTML = 'upgrade webpack! ' + MyFoo();
