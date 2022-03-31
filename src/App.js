import './App.css';
import React from 'react';
import { GifLayout } from './gif-layout/gifLayout';
import { SearchInput } from './search-input/searchInput';

const App = () => {
  return (
    <div className="App">
      <SearchInput/>
      <GifLayout/>
    </div>
  );
}

export default App;
