import * as React from 'react';
import logo from './logo.svg';
import Activity from './activity/Activity';
import Timer from './timer/Timer';
import History from './history/History'
// import * as styles from './styles.css';
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
