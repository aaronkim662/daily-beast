import React from "react";
import icon from './giphy-icon.png'
import './title-container.css'

export const TitleContainer = () => {
  return (
    <div className = 'title-container'>
      <img 
        src = {icon} 
        alt = 'giphy-icon' 
        className = 'giphy-icon'
      />
      <div className = 'app-title'>GIPHY GRABBER</div>
    </div>
  )
}