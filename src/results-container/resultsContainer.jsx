import './resultsContainer.css';

const ResultsContainer = (props) => {
  return (
    <div className='results-container'>
      <div className = 'static-element'>
        Showing Results for: 
      </div>
      <div className='results-container-value'>
        {props.results}
      </div>
    </div>
  )
}

export default ResultsContainer;