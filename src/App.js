import './App.css';
import React, { useEffect, useState } from 'react';
import { GifLayout } from './gif-layout/gifLayout';
import { SearchInput } from './search-input/searchInput';
import { TitleComponent } from './title-component/title-component';
import axios from 'axios';

const App = () => {

  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');

  const getGifs = async (event, limit = 25, offset) => {
    if(event) event.preventDefault();

    const localhost = 'http://localhost:4000/';

    const data = await axios.get(`${localhost}giphy/${search}`, { 
      params: { 
        limit: limit,
        offset: offset
      }
    });

    if(data !== undefined && gifs.length === 0) setGifs(data.data.data);
    setGifs((prev) => {
      return prev.concat(data.data.data);
    })
  }

  const handlescroll = () => {
    const scrolledPosition = Math.ceil(document.documentElement.scrollTop);
    const fullHeight = Math.floor(
      document.documentElement.scrollHeight - document.documentElement.clientHeight
      );

    if(scrolledPosition >= fullHeight){
      getGifs(null, 8, gifs.length + 8);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handlescroll, { passive: true});
    
    return () => {
      window.removeEventListener('scroll', handlescroll);
    }
  }, []);

  return (
    <div className="giphy-app">
      <TitleComponent />
      <SearchInput
        search = { search }
        setSearch = { setSearch }
        getGifs = { getGifs }
      />
      <GifLayout 
        gifs = { gifs }
        columns = { 4 }
        gap = { 0 }
      />
    </div>
  );
}

export default App;
