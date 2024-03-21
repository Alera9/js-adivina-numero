const outputNumber = document.getElementById('outputNumber');
//Buttons
const minorBtn = document.getElementById("minorBtn");
const startBtn = document.getElementById("startBtn");
const largerBtn = document.getElementById("largerBtn");
//variables
let min =1;
let max = 100;
const giveRandomNumberInRange = (min, max) => Math.round(Math.random()*(max-min)+min);
const disableButton = (btn) => btn.disabled = true;
const changeNumber = (min, max) => outputNumber.innerHTML = `<h2 id="randomNumber">${giveRandomNumberInRange(min,max)}</h2>` ;
const getValueInOutput = () => document.getElementById("randomNumber").innerText * 1;
const changeNumberInBiggerRange = () => changeNumber( min = getValueInOutput(), max ); 
const changeNumberInMinorRange = () => changeNumber( min, max = getValueInOutput() );

const startGame = () => changeNumber(min,max);




//Events
