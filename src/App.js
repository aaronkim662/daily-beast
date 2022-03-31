import './App.css';
import React from 'react';
import { GifLayout } from './gif-layout/gifLayout';
import { SearchInput } from './search-input/searchInput';
import { TitleComponent } from './title-component/title-component';

const App = () => {
  return (
    <div className="App">
      <TitleComponent />
      <SearchInput/>
      <GifLayout/>
    </div>
  );
}

export default App;
