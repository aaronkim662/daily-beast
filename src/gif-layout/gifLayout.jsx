import React from "react";
import './gifLayout.css';

export const GifLayout = (props) => {

  const columns = [];
  const createColumns = () => {
    for(let index = 0; index < props.columns; index++){
      columns.push([]);
    };
  };

  const renderGifs = () => {
    if(columns.length !== 4) createColumns();
    props.gifs.forEach((element, index) => {
      const currentIndex = index % props.columns;
      columns[currentIndex].push(element);
    });

    return (
      columns.map((outer, index) => {
        return (
          <div className = 'gif-column'>
            {outer.map((inner, index) => {
              const randomHeight = 100 + Math.random() * 200;
              return (
                <div key = {inner.id} className = 'gif' >
                  <img src = {inner.images.fixed_height.url} alt = {inner.title} className = 'gif-img' style = {{height: randomHeight}}/>
                </div>
              )
            })}
          </div>
        )
    }))
  }

  return (
    <div className = 'gif-layout'>
      {props.gifs[0] ? renderGifs() : null}
    </div>
  )
}