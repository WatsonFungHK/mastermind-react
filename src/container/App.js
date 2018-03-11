import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';


import Activity from './component/activity/Activity';
import Timer from './component/timer/Timer';
import History from './component/history/History';
import Root from './component/root/Root';

const history = createBrowserHistory();
// const store = createStore(history, __DEV__);

const renderHtml = (MyApp) => {
  render(
    <AppContainer>
      <Provider >
        <ConnectedRouter history={history}>
          <MyApp />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

renderHtml(Root);

// export default App;
