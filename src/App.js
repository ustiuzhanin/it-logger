import React, { useEffect } from 'react';
import SearchBar from './components/layout/navbar/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

const App = () => {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  });
  return (
    <React.Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </React.Fragment>
  );
};

export default App;
