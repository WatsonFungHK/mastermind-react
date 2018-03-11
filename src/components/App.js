import * as React from 'react';
import Activity from '../containers/activity/Activity';
import Timer from '../containers/timer/Timer';
import History from '../containers/history/History'
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="topBar">
          <Activity />
        </div>
        <div className="container">
          <Timer class="left" />
          <History className="right" />
        </div>
      </div>
    );
  }
}

export default App;
