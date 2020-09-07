import React from 'react';
import ReactDOM from 'react-dom';

import SearchMovies from "./components/searchMovie";
import './index.css';
import * as serviceWorker from './serviceWorker';


class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Search Movies Online</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render( <Main />, document.getElementById('root') );

serviceWorker.unregister();
