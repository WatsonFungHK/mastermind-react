import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './activity/Activity';
import Timer from './timer/Timer';
import History from './history/History'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Activity />
        <div>
          <Timer />
          <History />
        </div>
      </div>
    );
  }
}

export default App;
