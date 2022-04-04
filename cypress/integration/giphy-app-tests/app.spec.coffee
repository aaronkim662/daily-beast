mainApp = 'http://localhost:3000';
searchValue = 'Dog'
giphyValues = {
  columns: 4,
  mobileColumns: 1,
  numberOfGifs: 25
}

describe 'Giphy App', -> 
  before ->
    cy.visit mainApp

  context 'Loads all entry components', ->

    it 'Title container', ->
      
    
    it 'Previous container', -> 

      cy.get '.previous-container'
        .should 'have.text', 'PreviousSearches:'

      cy.get '.previous-container-value'
        .should 'be.empty'

      cy.get '.previous-container'
        .find 'div'
        .should 'have.class', 'static-elements'
        .should 'have.class', 'previous-container-value'
        .should 'have.class', 'previous-container-element'

    it 'Results container', ->

      cy.get '.results-container'
        .should 'have.text', 'Showing Results for:'

      cy.get '.results-container'
        .find 'div'
        .should 'have.class', 'static-element'
        .should 'have.class', 'results-container-value'

      cy.get '.results-container-value'
        .should 'be.empty'

    it 'Search input and button', ->

      cy.get '#search-form'
        .find 'input'
        .should 'have.id', 'search-input'
      
      cy.get '#search-form'
        .find 'div'
        .should 'have.id', 'search-icon-container'

      cy.get '#search-form'
        .find 'svg'
        .should 'have.id', 'search-icon'

      cy.get '#search-input'
        .invoke 'attr', 'placeholder'
        .should 'contain', 'Search...'
      
      cy.get '#search-input'
        .should 'have.value', ''

      cy.get '#search-icon'
        .should 'have.class', 'fa-magnifying-glass'
        .and 'have.class', 'fa-flip-horizontal'
        .and 'have.class', 'fa-xl'

    it 'An empty, non-visible grid', ->
      
      cy.get '.masonry-grid'
        .should 'be.empty'

  context 'Checks submission on enter and button click', ->

    it 'Check on enter', ->
      cy.get '#search-input'
        .type "#{searchValue}{enter}"

      cy.get '.masonry-grid'
        .find '.masonry-grid-column'
        .should 'have.length', giphyValues.columns

      cy.reload()

    it 'Check on button click', ->
      cy.get '#search-input'
        .type "#{searchValue}"

      cy.get '#search-icon'
        .click()

      cy.get '.masonry-grid'
        .find '.masonry-grid-column'
        .should 'have.length', giphyValues.columns

  context 'Loads gifs on search', ->
      
    it 'Displays gifs', ->
      cy.get '.giphy-image'
        .should 'have.length', giphyValues.numberOfGifs
      
      cy.get '.giphy-image'
        .invoke 'attr', 'src'
        .should 'not.be.empty'

    it 'Displays results container', ->
        cy.get '.results-container-value'
          .should 'to.contain', searchValue

    it 'Displays previous', ->


  context 'Checks mobile responsiveness', ->
    before ->
      cy.viewport 303, 800
    
    it 'Have one column', ->
      cy.get '.masonry-grid'
        .find '.masonry-grid-column'
        .should 'have.length', giphyValues.mobileColumns
        
      