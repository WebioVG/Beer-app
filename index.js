import VanillaRouter from "/vanillarouter/js/vanillarouter.js"; 

const router = new VanillaRouter({
    type: "history",
    routes: {
        "/": "home",
        "/search": "search"
    }
}).listen().on("route", async e => {
    
    // console.log(e.detail.route, e.detail.url);

})

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
    constructor(beersArray) {
        this.beersArray = beersArray
        this.display = document.createElement('div')
    }

    initialize = () => {
        this.display.id = 'resultsContainer'

        for (let beer of this.beersArray) {
            beer.initialize()
        }

        document.body.append(this.display)
    }
}

class Beer {
    constructor(beer) {
        this.name = beer.name
        this.imageUrl = beer.image_url

        this.displayContainer = document.createElement('div')
        this.displayName = document.createElement('h2')
        this.displayImage = document.createElement('img')
    }

    initialize = () => {
        this.displayContainer.id = "beerContainer"
        this.displayName.id = "beerName"
        this.displayName.textContent = this.name
        this.displayImage.id = "beerImage"
        this.displayImage.setAttribute('src', this.imageUrl) 
        
        this.displayContainer.append(this.displayName)
        this.displayContainer.append(this.displayImage)

        results.display.append(this.displayContainer)
    }
}

class Single {
    constructor(beer) {
        this.id = beer.id
        this.imageUrl = beer.image_url
        this.name = beer.name
        this.tips = beer.brewers_tips
        this.alcoholContent = beer.abv
        this.foodPairing = beer.food_pairing
        this.ibu = beer.ibu

        this.displayContainer = document.createElement('div')
            this.displaySingleContainer = document.createElement('div')
                this.displayMainContainer = document.createElement('div')
                    this.displayMainImage = document.createElement('img')
                    this.displayMainInfoContainer = document.createElement('div')
                        this.displayMainName = document.createElement('h2')
                        this.displayMainTips = document.createElement('p')
                this.displayDetailsContainer = document.createElement('div')
                    this.displayDetailsInfoContainer = document.createElement('div')
                        this.displayDetailsAlcoholContent = document.createElement('p')
                        this.displayDetailsFoodPairing = document.createElement('div')
                        this.displayDetailsIbu = document.createElement('p')
                    this.displayDetailsImage = document.createElement('img')
                this.displayButtonContainer = document.createElement('div')
                    this.displayPurchaseButton = document.createElement('button')

    }

    initialize = () => {
        this.displayContainer.id = 'resultsContainer'
            this.displaySingleContainer.id = 'singleContainer'
                this.displayMainContainer.id = 'singleMainContainer'
                    this.displayMainImage.id = 'singleMainImage'
                    this.displayMainImage.setAttribute('src', this.imageUrl)
                    this.displayMainInfoContainer.id = 'singleMainInfoContainer'
                        this.displayMainName.id = 'singleMainName'
                        this.displayMainName.textContent = this.name
                        this.displayMainTips.id = 'singleMainTips'
                        this.displayMainTips.textContent = this.tips
                this.displayDetailsContainer.id = 'singleDetailsContainer'
                    this.displayDetailsInfoContainer.id = 'singleDetailsInfoContainer'
                        this.displayDetailsAlcoholContent.id = 'singleDetailsAlcoholContent'
                        this.displayDetailsFoodPairing.id = 'singleDetailsFoodPairing'
                        this.displayDetailsIbu.id = 'singleDetailsIbu'
                    this.displayDetailsImage.id = 'singleDetailsImage'
                this.displayButtonContainer.id = 'singleButtonContainer'
                    this.displayPurchaseButton.id = 'singlePurchaseButton'
                    this.displayPurchaseButton.textContent = 'Purchase'


        this.displayButtonContainer.append(this.displayPurchaseButton)
        this.displayDetailsContainer.append(this.displayDetailsInfoContainer, this.displayDetailsImage)
        this.displayMainInfoContainer.append(this.displayMainName, this.displayMainTips)
        this.displayMainContainer.append(this.displayMainImage, this.displayMainInfoContainer)
        this.displaySingleContainer.append(this.displayMainContainer, this.displayDetailsContainer, this.displayButtonContainer)
        this.displayContainer.append(this.displaySingleContainer)
        document.body.append(this.displayContainer)
    }
}

// Initialize variables
const beersArray = []

// Load the API and store the data
fetch('https://api.punkapi.com/v2/beers').then(response => {
    return response.json()
}).then(data => {
    data.map(element => {
        beersArray.push(new Beer(element))
    })
    // const single = new Single(data[0])
    // single.initialize()    
})

// Create the components
const header = new Header("Beer App!")
const search = new Search()
const results = new Results(beersArray)

// Get HTML elements
const body = document.querySelector('body')

// Load components
header.initialize()
search.initialize()


setTimeout(() => {
    results.initialize()
}, 500);

