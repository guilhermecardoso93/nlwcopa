const cardBoard = document.querySelector("#cardboard");
var botao = document.querySelector("button");
const imgs = [
    "barcelona.svg",
    "chelsea-logo.svg",
    "psg-paris-saint-germain.svg",
    "real-madrid-c-f.svg",
    "manchester-city.svg",
    "napoli.svg",
];
let cardHTML = "";

imgs.forEach(img => {
    cardHTML += <div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/uefa-champions-league.svg">
  </div>
  
})

 cardBoard.innerHTML = cardHTML + cardHTML;

 const cards = document.querySelectorAll(".memory-card");
 let firstCard, secondCard;
 let lockCards = false;

 function FlipCard() {
   if(lockCards) return false;
  this.classList.add("flip");

    if(!firstCard) {
      firstCard = this;

      return false;
    }

    secondCard = this;

    checkForMatch();
 }

 function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    !isMatch ? unFlipCards() : resetCards(isMatch);

    if (isMatch.length === 6) {
      return alert("Jogo Encerrado, Parabens")
    }
 }


 botao.addEventListener ('click', function() {
  alert('Oi')
  window.location.reload();
  })

function unFlipCards(){
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
 
   resetCards();
 }, 1000);
}

(function shuffle() {
  cards.forEach(card => {
    let rand = Math.floor(Math.random() * 12);
    card.style.order = rand;
  });
})();

function resetCards(isMatch = false) {
  if (isMatch) {
    firstCard.removeEventListener("click", FlipCard);
    secondCard.removeEventListener("click", FlipCard);
  }

  [firstCard, secondCard, lockCards] = [null, null, false];
}

cards.forEach(card => card.addEventListener("click", FlipCard));