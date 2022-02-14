# GA - Project 1


## SNAP GAME
Play here: https://ollypettyfer.github.io/project-1/

A snap game built for playing in the browser.

![project-1-image](https://user-images.githubusercontent.com/85187554/149317796-078a4e98-767a-40f9-971a-f3bdf9ac745c.png)

## Requirements:

* Time frame of 1 week
* Build a playable game that renders in the browser.


## Technologies 
* Vanilla JavaScript
* CSS
* HTML5
* Git
* GitHub

### Fonts from - Google.Fonts



## Planning
To wireframe this project I used pen and paper and sketched out my design. Unfortunately, I do not have my original sketch to add to this ReadMe.


## Build
My idea was to start small with this project, then add extra features such as levels once the MVP had been met. 

For this game, the MVP was to be able to show a selection of images and when a correct matching pair is clicked an event would occur, in this instance a point scored.

I used an array of objects to show the individual images.

```javascript
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
```

### Starts game and matches users correct/incorrect pairs of cards.
```javascript
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
```
I used a set interval timer function to cycle through the images and then was able to control the speed at which they are shown.

I also included inside the function the ability to cycle through the cards randomly each time the user plays the game.

### Interval timer and random card selection
```javascript
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
```

Once this had been reached I then implemented styling, a scoreboard counter and audio.

The style was completed with basic CSS utilising flexbox
```css
body {
   font-family: 'Indie Flower', cursive;
   margin: 0;
   padding: 0;
   min-height: 100%;
  
   background:url(../styling/photo-1577451581039-032debfb47b6.jpeg);
   background-repeat: no-repeat;
   background-size: 100% 100%;
}
 
.cardsContainer {
   display: flex;
   justify-content: space-around;
   align-content: center;
}
 
.fruitImages {
   display: flex;
   flex-flow: row;
   justify-content: space-around;   
}
```

When implementing the audio and found two sounds one for a correct matching pair and one for a wrong answer. I then added the sounds into my if/else statement on my scoring function. This allowed me to play the relevant audio when points were scored.
```javascript
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
```


## Challenges
My first big challenge was to create a function that would cycle through the selection of images in random order on an interval timer showing one at a time.

Once I had this in place my second challenge was to have a function that could identify when a player had made a correct pair of images. In the example, it was my “handleResults” and “handleWhichResults” functions that achieved this.

### Handle results from level 1
```javascript
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
```

### Handle results from level 2
```javascript
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
  
```
### Handles matching pairs from both levels
```javascript
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
```


When creating level 2 I had the challenge of removing the previous images from the game when clicking on the new level button.

## Wins
I am very happy that I have managed to meet my MVP and create a level 2 for my game. Being my first project I feel that I have learned a lot especially when it comes to logical thinking when trying to create certain functions. This shows with the adding and removing of images on a new level.


## Future Developments
* In the future I would like to increase the number of levels within the game. With this, it would allow me to add additional features.

* I would like to re-style the game.

## Game Instructions

Click the Start Game button - As the images appear click on the correct matching pair. For every correct pair made a point is scored.

Level 2 - The speed at which the images are shown is increased and any incorrect pairs made you will lose points.

##Key Learnings

This was my first ever coding project and as the game evolved so did my understanding of how important it is to plan out as many details as possible before starting to code. As each day progressed I wanted to change the way the game played/worked and this led to more problem-solving issues. 

Looking back now I would have gone into more depth with my planning and wireframing trying to plan and understand what sort of function I would need to achieve my MVP. However, the fact that bugs and problems regularly occurred helped me develop myself and my code for future projects.

The main bug I had was once the player had finished level 1 I needed to remove the current cards and matching pairs from view so that level 2 cards could be shown.

I overcome this issue by creating a function that would hide both sets of cards and when the play click the start button the first level of cards would display “none” on the second level of cards.

```javascript
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
 

 ```

I repeated the process but in reverse when completing level 2.

### Hiding level 1’s cards whilst showing level 2.
```javascript
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
```

