import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import api from './api';

import Searchbar from './components/SearchBar';
import Floater from './components/Floater';
import Results from './components/Results';

class App extends React.Component {
  state = {
    content: false,
    results: {},
  }
  search = async (query) => {
    console.log('searching for ', query);
    const response = await api.search(query);
    console.log('response:', response);

    const { error, results: items } = response;
    if (error)
      alert(error);
    else if (items)
      this.setState({ results: { items, query }, content: true });
  }
  render = () => {
    const { content, results } = this.state;
    return (
      <div className="app-container d-flex flex-column">
        <div className="p-2 border-bottom d-flex flex-row">
          <img src="/icon.png" className="jina-icon mt-2" />
          <p className="ml-2 px-4 mb-0 py-2 flex-fill text-left no-wrap">
            <b>Jina Box</b> | Demo
        </p>
          <Searchbar search={this.search} />
        </div>
        <Floater />
        <div className="flex-fill content-container">
          {
            content ?
              <Results results={results} search={this.search} />
              :
              [
                <div className="empty-content" />,
                <div className="empty-content" />,
                <div className="empty-content" />,
                <div className="empty-content" />,
                <div className="empty-content" />,
                <div className="empty-content" />,
              ]
          }
        </div>
      </div>
    );
  }
}

export default App;
