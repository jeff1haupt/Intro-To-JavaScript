class Card {
    constructor(value, description) {
        this.value = value;
        this.description = description;
    }

    getCardValue() { // this is just for the Mocha test 
        return this.value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    shuffleCards() {
        this.cards = this.cards.sort(() => Math.random() - 0.5)
        // a different approachusing sorting algorithm 
        // let i = 0;
        // let j = 0;
        // let temp = 0;
        // for (i = this.deckOfCards.length - 1; i > 0; i--) {
        //     j = Math.floor(Math.random() * (i + 1));
        //     temp = this.deckOfCards[i];
        //     this.deckOfCards[i] = this.deckOfCards[j];
        //     this.deckOfCards[j] = temp;
        // }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}

function gamePlay() { // this can be a function or Class 
    // getting our players
    let player1 = makePlayers();
    let player2 = makePlayers();
    
    // making the deck
    let suits = ["Club", "Heart", "Diamond", "U+2660"];
    let values = [2, 3, 4, 5, 6] // you can hard code values, but think about using a for loop counter for values - they don't have to start at 0
    const gameDeck = new Deck(); // this has an array waiting for cards to be put in it.
    // nested for loops 
    // -- suits be your outer for loop
    // -- values be your inner for loop 
    const card = new Card(values[2], `${values[2]} of ${suits[3]}s`); // repeat this 
    console.log(card);

    // shuffle deck 
    // deal the cards 
    // play the rounds 
    // check for final win
}

function makePlayers() {
    const newPlayer = new Player(prompt("What's your name?"))
    return newPlayer;
}

gamePlay();


