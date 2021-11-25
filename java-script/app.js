//cards that never change
const setCard = ["apple", "banana", "strawberry"];

//point scored
const totalPoints = document.querySelector(".score");

//select a list of cards/images
const playersCards = [
  {
    imageName: "apple",
    imageSrc: "../flip-card-images/apple.png",
  },

  {
    imageName: "avocado",
    imageSrc: "../flip-card-images/avocado.png",
  },

  {
    imageName: "strawberry",
    imageSrc: "../flip-card-images/strawberry.png",
  },
  
  {
      imageName: 'banana',
      imageSrc: '../flip-card-images/banana.png'
  },

  {
      imageName: 'blueberries',
      imageSrc: '../flip-card-images/blueberries.png'
  },

  {
      imageName: 'grapes',
      imageSrc: '../flip-card-images/grapes.png'
  },

  {
      imageName: 'green-apple',
      imageSrc: '../flip-card-images/green-apple.png'
  },

  {
      imageName: 'kiwi-fruit',
      imageSrc: '../flip-card-images/kiwi-fruit.png'
  },

  {
      imageName: 'pineapple',
      imageSrc: '../flip-card-images/pineapple.png'
  },

  {
      imageName: 'tangerine',
      imageSrc: '../flip-card-images/tangerine.png'
  },

  {
      imageName: 'tomato',
      imageSrc: '../flip-card-images/tomato.png'
  }
];


//hide images
const hideSetCard = document.getElementById('setCard')
hideSetCard.style.display = 'none'
const hideSetCardLevel2 = document.getElementById('setCardLevel2')
hideSetCardLevel2.style.display = 'none'


//when clicking start button run the interval timer function below below.

const playGame = document.getElementById("start-button")

function handleStartGame(event) {
    loopThroughtCurrentCards(playersCards, 1400)
    //loop through each card at a set time interval.
    
    const imagesNotShown1 = document.getElementById('setCardLevel2')
    imagesNotShown1.style.display = 'none'
    const imagesShown1 = document.getElementById('setCard')
    imagesShown1.style.display = "block"
}
playGame.addEventListener("click", handleStartGame)

//audio
const correctAudio = document.getElementById('correct')
const wrongAudio = document.getElementById('wrong')

let scored = 0;
function handleResults(event) {
    const currentChoice = event.target.id;
    if (
        currentChoice === "apple" ||
        currentChoice === "banana" ||
        currentChoice === "strawberry"
        ) { 
            document.getElementById('correct').play(correctAudio)
            addToScore()
        } else {
            document.getElementById('wrong').play(wrongAudio)
            scored = scored + 0;
            console.log(scored);
        }
        return playersCards;
    }
    console.log(playersCards);
    
    //add event listeners to the cards that match the SETCARDS so when card is clicked on it is logged a number.


//LEVEL2

//cards that never change
const setCardLevel2 = ["dog", "camel", "rhinoceros"];

//point scored
const totalPointsLevel2 = document.querySelector(".score");

//select a list of cards/images
const playersCardsLevel2 = [
  {
    imageName: "dog",
    imageSrc: "../flip-card-images-level-2/dog.png",
  },

  {
    imageName: "camel",
    imageSrc: "../flip-card-images-level-2/camel.png",
  },

  {
    imageName: "rhinoceros",
    imageSrc: "../flip-card-images-level-2/rhinoceros.png",
  },
  
  {
      imageName: 'bat',
      imageSrc: '../flip-card-images-level-2/bat.png'
  },

  {
      imageName: 'elephant',
      imageSrc: '../flip-card-images-level-2/elephant.png'
  },

  {
      imageName: 'guide-dog',
      imageSrc: '../flip-card-images-level-2/guide-dog.png'
  },

  {
      imageName: 'hedgehog',
      imageSrc: '../flip-card-images-level-2/hedgehog.png'
  },

  {
      imageName: 'hippopotamus',
      imageSrc: '../flip-card-images-level-2/hippopotamus.png'
  },

  {
      imageName: 'kangaroo',
      imageSrc: '../flip-card-images-level-2/kangaroo.png'
  },

  {
      imageName: 'orangutan',
      imageSrc: '../flip-card-images-level-2/orangutan.png'
  },

  {
      imageName: 'parrot',
      imageSrc: '../flip-card-images-level-2/parrot.png'
  },

  {
    imageName: 'pig',
    imageSrc: '../flip-card-images-level-2/pig.png'
},

{
    imageName: 'rabbit',
    imageSrc: '../flip-card-images-level-2/rabbit.png'
},

{
    imageName: 'raccoon',
    imageSrc: '../flip-card-images-level-2/raccoon.png'
},

{
    imageName: 'shark',
    imageSrc: '../flip-card-images-level-2/shark.png'
},

{
    imageName: 'snail',
    imageSrc: '../flip-card-images-level-2/snail.png'
},

{
    imageName: 'tiger',
    imageSrc: '../flip-card-images-level-2/tiger.png'
},

{
    imageName: 'turtle',
    imageSrc: '../flip-card-images-level-2/turtle.png'
},

{
    imageName: 'two-hump-camel',
    imageSrc: '../flip-card-images-level-2/two-hump-camel.png'
},

{
    imageName: 'whale',
    imageSrc: '../flip-card-images-level-2/whale.png'
},

{
    imageName: 'zebra',
    imageSrc: '../flip-card-images-level-2/zebra.png'
}
];

const playNextLevel = document.getElementById('nextLevel')

function handlePlaylevel2(event) {
    const currentLevelCards = playersCardsLevel2
    loopThroughtCurrentCards (currentLevelCards, 900)
    
    //reset score
    totalPoints.innerHTML = ""
    scored = 0
    
    //hide level one images 
    const imagesNotShown2 = document.getElementById('setCard')
    const imagesShown2 = document.getElementById('setCardLevel2')
        imagesNotShown2.style.display = 'none'
        imagesShown2.style.display = "block"
}

    function loopThroughtCurrentCards(currentLevelCards, timeout) {
    let i = 0;
    let timer = setInterval(function () {
        i++;
        if (i > 2 * currentLevelCards.length) {
            clearInterval(timer);
            alert("Level 1 you matched" + " " + scored + " " + "pairs.")
        }
        
        //additionally create the loop random so the cards are not always in the same order.
        const random = Math.floor(Math.random() * currentLevelCards.length);
        console.log(random, currentLevelCards[random]);
        
        //can change this to remove.child?
        playersCardArray.innerHTML = ''
        const newImage = document.createElement("img");
        newImage.src = currentLevelCards[random].imageSrc;
        newImage.setAttribute("id", currentLevelCards[random].imageName);
        playersCardArray.appendChild(newImage);
    }, timeout);
}


playNextLevel.addEventListener('click', handlePlaylevel2)

//identify which cards will match the other SETCARDS by adding class/ids
function addToScore(params) {
    scored = scored +1
    totalPoints.innerHTML = "Current Pairs" + " " + scored;
}
function removeFromScore(params) {
    scored = scored - 1
    totalPoints.innerHTML = "Current Pairs" + " " + scored;
}
let scored2 = 0;
function handleResults2(event) {
    const currentChoice = event.target.id;
    if (
        currentChoice === "camel" ||
        currentChoice === "dog" ||
        currentChoice === "hippopotamus" ||
        currentChoice === 'whale' ||
        currentChoice === 'raccoon' ||
        currentChoice === 'strawberry'
        ) {
        document.getElementById('correct').play(correctAudio)
        addToScore()
    } else {
        document.getElementById('wrong').play(wrongAudio)
           removeFromScore()
        }
        return playersCardsLevel2;
    }
    console.log(playersCardsLevel2);
    
    //add event listeners to the cards that match the SETCARDS so when card is clicked on it is logged a number.
const clickEvent2 = document.querySelector("#playersCardArray");

function handleWhichResults(event) {
    if (event.target.id === 'strawberry'||
        event.target.id === 'banana' ||
        event.target.id === 'apple' ||
        event.target.id === 'blueberries' ||
        event.target.id === 'avocado' ||
        event.target.id === 'grapes' ||
        event.target.id === "green-apple" ||
        event.target.id === "kiwi-fruit" ||
        event.target.id === 'pineaplle' ||
        event.target.id === 'tangerine' ||
        event.target.id === 'tomato'
        ) {
        handleResults(event)
    }
    else 
    {handleResults2(event)}
}
clickEvent2.addEventListener("click", handleWhichResults);