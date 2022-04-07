import './App.css';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { TitleContainer, PreviousContainer, ResultsContainer, SearchInput } from './import.js';
import { formatToUppercase } from './javascripts/format-text';
import Masonry from 'react-masonry-css';
import axios from 'axios';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(24);
  const [uniqueIds, setUniqueIds] = useState([]);

  const [previous, setPrevious] = useState('');
  const [loading, setLoading] = useState(true);

  const observer = useRef();

  useEffect(() => {
    setTimeout(() => {
      setPrevious(formatToUppercase(result))
    }, 1000);
    if(search === '') setResult('')
    setGifs([])
    setUniqueIds([])
  }, [search]);

  useEffect(() => {
    if(search !== '') searchGifs()
  }, [limit, offset, loading]);

  const lastElement = useCallback(node => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setLimit(16);
        setOffset(gifs.length);
      };
    });
    if(node) observer.current.observe(node);
  }, 
  [loading, gifs.length, offset, limit]);

  const giphyApi = async () => {
    const localhost = 'http://localhost:4000/';
    const data = await axios.get(`${localhost}giphy/${search}`, { 
      params: { 
        limit: limit,
        offset: offset
      }
    });

    const uniqueElements = uniqueData(data.data.data);

    return uniqueElements;
  }

  const uniqueData = (data) => {
    const gifArr = [];
    data.forEach((element) => {
      if(!uniqueIds.includes(element.id)){
        gifArr.push(element)
        setUniqueIds(prev => {
          return [...prev, element.id]
        });
      };
    });

    return gifArr;
  }

  const searchGifs = async (event) => {
    if(event) event.preventDefault();

    const giphyData = await giphyApi();

    setGifs(prev => {
      return [...prev, ...giphyData];
    });

    setResult(formatToUppercase(search));
    setLoading(false);
  }

  const formatGifs = () => {
    return (
      gifs.map((element, index) => {
        const randomHeight = 100 + Math.random() * 200;
        if(gifs.length === index + 1){
          return (
            <img 
              key = {element.id}
              className = 'giphy-image'
              ref = {lastElement}
              src = {element.images.fixed_height.url} 
              alt = {element.title} 
              style = {{height: randomHeight}}
            />)
        }else {
          return (
              <img 
                key = {element.id}
                className = 'giphy-image'
                src = {element.images.fixed_height.url} 
                alt = {element.title} 
                style = {{height: randomHeight}}
              />
          );
        };
      })
    );
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="giphy-app">
      <TitleContainer />
      <SearchInput
        search = { search }
        setSearch = { setSearch }
        searchGifs = { searchGifs }
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