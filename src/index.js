
import * as serviceWorker from './serviceWorker';
import React from 'react';

import mirror, { render } from "mirrorx";
import Routers from './Router';

mirror.defaults({
  historyMode: "hash"
});

render(  <Routers/>,  document.getElementById('root'));
serviceWorker.unregister();
