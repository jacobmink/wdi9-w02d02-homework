const cardDeck = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ];

const unpackCard = (obj)=>{
  let pokeName = obj.name;
  let pokeDamage = obj.damage;
  return `Name: ${pokeName}, Damage: ${pokeDamage}`;
}

const player = {
  name: 'Jake',
  hand: [],
  pastPlayed: [],
  // currentCard: this.hand[0],
  score: 0,
  // playCard(){
    // console.log("playin a card");
    // let card = prompt(`Which card would you like to play? Your options are \n ${unpackCard(this.hand[0])}, \n ${unpackCard(this.hand[1])}, \n ${unpackCard(this.hand[2])}`);

  // }
};

const comp = {
  name: 'Compy',
  hand: [],
  score: 0,
  // playCard(){

  // }
};

const game = {
    fullDeck: cardDeck,
    playerScore: player.score,
    compScore: comp.score,
    round: 0,
    roundPlayer: 0,
    roundComp: 0,
    dealCards(){
      for (i = 0; i < 3; i++){
        let randomIndex1 = Math.floor(Math.random() * (this.fullDeck.length - 1));
        let randomIndex2 = Math.floor(Math.random() * (this.fullDeck.length - 1));
          player.hand.push(this.fullDeck.splice(randomIndex1,1)[0]);
          // console.log(randomIndex1);
          comp.hand.push(this.fullDeck.splice(randomIndex2,1)[0]);
          // console.log(randomIndex2);
      }
      console.log(`Player's hand: ${unpackCard(player.hand[0])} \n  ${unpackCard(player.hand[1])} \n ${unpackCard(player.hand[2])}`);
      console.log(`Computer's hand: ${unpackCard(comp.hand[0])} \n  ${unpackCard(comp.hand[1])} \n ${unpackCard(comp.hand[2])}`);
    },
    gamePlay(){
      while (this.fullDeck.length > 0){
        console.log('\nNEW HAND FOR EVERYONE\n');
        this.dealCards();
        while (player.hand.length > 0){
          this.round += 1;
          let playerCard = player.hand.splice(0,1)[0];
          let compCard = comp.hand.splice(0,1)[0];
          console.log(`\n\nRound ${this.round}`);
          console.log(`Player plays ---------- ${unpackCard(playerCard)}\nComputer plays ---------- ${unpackCard(compCard)}`);
          if (playerCard.damage > compCard.damage){
            player.score += 1;
            this.roundPlayer += 1;
            console.log(`${player.name} wins!\n\n`);
          } else if (playerCard.damage < compCard.damage){
            comp.score += 1;
            this.roundComp += 1;
            console.log(`${comp.name} wins!\n\n`);
          }
          player.pastPlayed.push(unpackCard(playerCard));
          // console.log(player.pastPlayed);
          
          console.log(`Player: ${player.score}\nComputer: ${comp.score}`);
        }
      }
      let winner = (player.score > comp.score) ? player.name:comp.name;
      console.log(`NO MORE CARDS YA NERDS!\nThe winner is: ${winner}!`);
    }



};





game.gamePlay();