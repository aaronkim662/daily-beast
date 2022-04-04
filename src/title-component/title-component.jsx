import React from "react";
import icon from './giphy-icon.png'
import './title-component.css'

export const TitleComponent = () => {
  return (
    <div className = 'title-component'>
      <img 
        src = {icon} 
        alt = 'giphy-icon' 
        className = 'giphy-icon'
      />
      <div className = 'app-title'>GIPHY GRABBER</div>
    </div>
  )
}