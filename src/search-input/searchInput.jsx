import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './searchInput.css';

const SearchInput = (props) => {
  
  return (
    <form id = 'search-form' onSubmit = {(event) => props.searchGifs(event)}>
      <input
        id = 'search-input'
        value = {props.search}
        placeholder = 'Search...'
        onChange = {event => props.setSearch(event.target.value)}
      />
      <div 
        id = 'search-icon-container'
        onClick = {(event) => props.searchGifs(event)}
      >
        <FontAwesomeIcon
          id = 'search-icon'
          icon = { faMagnifyingGlass }
          flip = "horizontal"
          size = 'xl'
        />
      </div>
    </form>
  )
}

export default SearchInput;