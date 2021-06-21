const cards = document.querrySelectorAll(".memory-card")
let hasFlippedCard = false
let firstCard,secondCard;

function flipcCard(){
	this.classList.add("flip")
	if(!hasFlippedCard){
		hasFlippedCard = true;
		firstCard = this;
	}else{
		hasFlippedCard = false
}

cards.foreach(card=>card.addEventListener("clik",flipcCard));
