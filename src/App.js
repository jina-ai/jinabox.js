import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';

import Searchbar from './components/SearchBar';
import Floater from './components/Floater';

class App extends React.Component {
  render = () => {
    return (
      <div className="app-container d-flex flex-column">
        <div className="p-2 border-bottom d-flex flex-row">
          <img src="/icon.png" className="jina-icon mt-2" />
          <p className="ml-2 px-4 mb-0 py-2 flex-fill text-left no-wrap">
            <b>Jina Box</b> | Demo
        </p>
          <Searchbar/>
        </div>
        <Floater />
        <div className="flex-fill content-container">
          <div className="empty-content" />
          <div className="empty-content" />
          <div className="empty-content" />
          <div className="empty-content" />
          <div className="empty-content" />
          <div className="empty-content" />
        </div>
      </div>
    );
  }
}

export default App;
