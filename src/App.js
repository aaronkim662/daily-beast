import './App.css';
import React, { useEffect, useState } from 'react';
import { SearchInput } from './search-input/searchInput';
import { TitleComponent } from './title-component/title-component';
import { PreviousContainer } from './previous-container/previousContainer';
import { ResultsContainer } from './results-container/resultsContainer';
import Masonry from 'react-masonry-css';
import axios from 'axios';

const App = () => {

  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('')
  const [previous, setPrevious] = useState('')
  const [scrolled, setScrolled] = useState(false)
  
  const getGifs = async (event, value, ) => {
    console.log('', gifs.length, search)
    if(event) event.preventDefault();
    
    let offset = 0;
    let limit = 25;
    
    if(value) setSearch(value)
    if(gifs.length > 0 && value){
      offset = gifs.length;
      limit = 8;
    }
    const localhost = 'http://localhost:4000/';
    const data = await axios.get(`${localhost}giphy/${search}`, { 
      params: { 
        limit: limit,
        offset: offset
      }
    });

    const validateData = data !== undefined

    // if(validateData && gifs.length > 0 && search === result) return; 
    
    if(validateData && gifs.length === 0 && !scrolled) {
      setGifs(data.data.data);
      setResult(search);
    }

    if(validateData && gifs.length > 0 && search !== result && !scrolled){
      setGifs(data.data.data);
      setPrevious(result)
      setResult(search);
    } 

    if(scrolled && value) {
      setScrolled(false)
      setGifs((prev) => {
        return prev.concat(data.data.data);
      })
    }
  }

  const handlescroll = () => {
    const scrolledPosition = Math.ceil(document.documentElement.scrollTop);
    const fullHeight = Math.floor(
      document.documentElement.scrollHeight - document.documentElement.clientHeight
    );

    if(scrolledPosition >= fullHeight){
      setTimeout(() => {
        setScrolled(true)
        getGifs(null, search);
        window.scrollTo(0, fullHeight - 500)
      }, 1000)
      
      // document.documentElement.clientHeight = 
    } 
  }

  const formatGifs = () => {
    return (
      gifs.map((element, index) => {
        const randomHeight = 100 + Math.random() * 200;
        return (
            <img 
              key = {element.id}
              className = 'giphy-image'
              src = {element.images.fixed_height.url} 
              alt = {element.title} 
              style = {{height: randomHeight}}
            />
        )
      })
    )
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

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
      <PreviousContainer previous = {previous}/>
      <ResultsContainer result = {result}/>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className = 'masonry-grid'
        columnClassName="masonry-grid-column"
      >
        {formatGifs()}
      </Masonry>
    </div>
  );
}

export default App;
