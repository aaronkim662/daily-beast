import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export const SearchInput = (props) => {
  return (
    <form id = 'search-form'>
      <input
        id = 'search-input'
        value = {props.value}
        placeholder = 'Search'
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