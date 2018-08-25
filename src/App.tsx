import * as React from 'react';
import './App.css';
import { CheckList } from './modules/checklist';
import { ImageGrid } from './modules/image-grid';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Barcamp 2018</h1>
        </header>
        <CheckList />
        <ImageGrid />
      </div>
    );
  }
}

export default App;
