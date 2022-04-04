import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './searchInput.css'


export const SearchInput = (props) => {

  return (
    <form id = 'search-form' onSubmit = {(event) => props.getGifs(event)}>
      <input
        id = 'search-input'
        value = {props.search}
        placeholder = 'Search...'
        onChange = {event => props.setSearch(event.target.value)}
      />
      <div 
        id = 'search-icon-container'
        onClick = {(event) => props.getGifs(event)}
      >
        <FontAwesomeIcon
          id = 'search-icon'
          icon = { faMagnifyingGlass }
          flip = "horizontal"
          size = 'xl'
          // className = 'fa-2xl'
        />
      </div>
      
    </form>
  )
}