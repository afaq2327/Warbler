import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import './index.css'

import Warbler from './containers/Warbler'

ReactDOM.render(
    <Warbler/>,
    document.getElementById('root')
);

serviceWorker.register();
