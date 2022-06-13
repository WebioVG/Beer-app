class Header {
    constructor(title) {
        this.title = title
    }

    initialize = () => {
        const headerDisplay = document.createElement('div')
        headerDisplay.id = 'header'
        headerDisplay.innerText = this.title

        document.body.append(headerDisplay)
    }
}

class Search {
    constructor() {
        this.display
    }

    initialize = () => {
        // Create HTML elements
        const searchContainer = document.createElement('div')
        searchContainer.id = 'searchContainer'

        const searchInput = document.createElement('input')
        searchInput.id = 'searchInput'
        searchInput.setAttribute('placeholder', 'Happy, Malt, Angry, New...')

        const searchButton = document.createElement('button')
        searchButton.id = 'searchButton'
        searchButton.innerText = 'RECHERCHE'

        // Add the HTML elements
        searchContainer.append(searchInput)
        searchContainer.append(searchButton)
        document.body.append(searchContainer)
    }
}

class Results {
    constructor() {
        this.display
    }

    initialize = () => {
        const resultsContainer = document.createElement('div')
        resultsContainer.id = 'resultsContainer'

        document.body.append(resultsContainer)
    }
}

class Beer {
    constructor() {
        this.display
    }

    initialize = () => {
        const beerContainer = document.createElement('div')
        beerContainer.id = "beerContainer"

        resultsContainer.append(beerContainer)
    }
}

// Create the components
const header = new Header("Beer App!")
const search = new Search()
const results = new Results()
const beer = new Beer()

// Get HTML elements
const body = document.querySelector('body')

// Load components
header.initialize()
search.initialize()
results.initialize()
beer.initialize()