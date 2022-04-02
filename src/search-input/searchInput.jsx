import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export const SearchInput = (props) => {
  
  return (
    <form id = 'search-form' onSubmit = {(event) => props.getGifs(event)}>
      <input
        id = 'search-input'
        value = {props.search}
        placeholder = 'Search'
        onChange = {event => props.setSearch(event.target.value)}
      />
      <FontAwesomeIcon
        id = 'search-icon-id'
        className = 'search-icon'
        icon = {faMagnifyingGlass}
        flip = "horizontal"
      />
    </form>
  )
}