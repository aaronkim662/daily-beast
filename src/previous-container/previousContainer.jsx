import './previousContainer.css';

const PreviousContainer = (props) => {
  return (
    <div className = 'previous-container'>
      <div className = 'static-elements'>
        <div className = 'previous-container-element'>Previous</div>
        <div className = 'previous-container-element'>Searches:</div>
      </div>
      <div className='previous-container-value'>
        {props.previous} 
      </div>
    </div>
  )
}

export default PreviousContainer;