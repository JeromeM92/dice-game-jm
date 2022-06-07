/* Initialisation */
let globalP1 = 0
let globalP2 = 0
let roundScore = 0

/* Valeur initial du dé */
let diceValue = 1

/* Tour de jeu*/
let P1 = true
let P2 = false

/* Condition de victoire */
const scoreToWin = 100

/* Récuparation des élements */
const newgame = document.getElementById('new-game')

const scoreGlobalP1 = document.getElementById('global-score-P1')
const scoreGlobalP2 = document.getElementById('global-score-P2')

const scoreCurrentP1 = document.getElementById('score-current-P1')
const scoreCurrentP2 = document.getElementById('score-current-P2')

const titleP1 = document.getElementById('container-player-1')
const titleP2 = document.getElementById('container-player-2')

const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const dice3 = document.getElementById('dice3')
const dice4 = document.getElementById('dice4')
const dice5 = document.getElementById('dice5')
const dice6 = document.getElementById('dice6')

const rollingDice = document.getElementById('btn__rollDice')
const saveCurrentToGlobal = document.getElementById('saveScore')
const btnRules = document.getElementById('rules')
const textRules = document.getElementById('regles')




/* Nouvelle partie */

newgame.addEventListener("click", newGame);

function newGame() {
    dice1.style.display = "block";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";  
    diceValue = 1;
    globalP1 = 0;
    globalP2 = 0;
    titleP1.style.color = "red"
    titleP2.style.color = "black"
    scoreGlobalP1.textContent = 0;
    scoreGlobalP2.textContent = 0;
    scoreCurrentP1.textContent = roundScore;
    scoreCurrentP2.textContent = roundScore;
    roundScore = 0;
    P1 = true;
    P2 = false;
    saveCurrentToGlobal.disabled = false
    rollingDice.disabled = false
};
newGame();




/* affichage du dé */
function displayDice (numberRand) {
switch (numberRand) {
    case 1:
        dice1.style.display = "block";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";   
        break;

    case 2:
        dice1.style.display = 'none';
        dice2.style.display = 'inline-block';
        dice3.style.display = 'none';
        dice4.style.display = 'none';
        dice5.style.display = 'none';
        dice6.style.display = 'none';
        break;
        
    case 3:
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        dice3.style.display = 'inline-block';
        dice4.style.display = 'none';
        dice5.style.display = 'none';
        dice6.style.display = 'none';
        break;
            
    case 4:
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        dice3.style.display = 'none';
        dice4.style.display = 'inline-block';
        dice5.style.display = 'none';
        dice6.style.display = 'none';
        break;
              
    case 5:
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        dice3.style.display = 'none';
        dice4.style.display = 'none';
        dice5.style.display = 'inline-block';
        dice6.style.display = 'none';
        break;
        
    case 6:
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        dice3.style.display = 'none';
        dice4.style.display = 'none';
        dice5.style.display = 'none';
        dice6.style.display = 'inline-block';
        break;
    }
}

btnRules.addEventListener("mouseenter", displayRules);
btnRules.addEventListener("mouseout", noDisplayRules);

function displayRules () {
    textRules.style.display = "block";
};
function noDisplayRules () {
    textRules.style.display = "none";
};

/* Déterminer un nombre aléatoire & lancement du dé */
rollingDice.addEventListener("click", rollDice)

function rollDice () {
    diceValue = Math.floor((Math.random(0,1) * 6) + 1);
    displayDice(diceValue);
    if (diceValue == 1) {
        if(P1){
        P1 = false
        P2 = true
        titleP2.style.color = "red"
        titleP1.style.color = "black"
        roundScore = 0;
        scoreCurrentP1.textContent = 0;
        return
    }
    else {
        P1 = true
        P2 = false
        titleP1.style.color = "red"
        titleP2.style.color = "black"
        roundScore = 0;
        scoreCurrentP2.textContent = 0;
        return
    }}
        
   if(P1) {
        roundScore += diceValue
        scoreCurrentP1.textContent = roundScore;
    }
    else {
        roundScore += diceValue;
        scoreCurrentP2.textContent = roundScore;
    }
}


/* Sauvegarder le score du round */
saveCurrentToGlobal.addEventListener("click", saveScore)
function saveScore(){
    /* sauvegarde du score round */
    if(P1){
        globalP1 += roundScore
        scoreGlobalP1.textContent = globalP1
    } else {
        globalP2 +=roundScore
        scoreGlobalP2.textContent = globalP2
    }
    /* Condition de victoire P1 */
    if (globalP1 >= scoreToWin){
            saveCurrentToGlobal.disabled = true
            rollingDice.disabled = true
            alert("Le joueur 1 a gagné !! Bravo !")
        }
    /* Condition de victoire P2 */
    if (globalP2 >= scoreToWin){
        saveCurrentToGlobal.disabled = true
        rollingDice.disabled = true
        roundScore = 0
            alert("Le joueur 2 a gagné !! Bravo !") 
        }  
    /*Remise à zéro du score round aprés sauvegarde */
    if (saveScore) {
        if (P1) {
            P1 = false
            P2 = true
            roundScore = 0
            scoreCurrentP1.textContent = 0
           
        }   
        else {
            P1 = true
            P2 = false
            roundScore = 0
            scoreCurrentP2.textContent = 0
        }}
}

/*Affichage des règles */


