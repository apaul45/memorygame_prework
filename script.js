// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; //Progress is meant to track how far in the user is into guessing the correct button to press
var gamePlaying = false; //Is changed to true once the game is started and is turned to false when it has ended
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikeCount = 0;
function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strikeCount = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden"); //Adds the hidden property to the startBtn id once the game starts
  document.getElementById("stopBtn").classList.remove("hidden"); //Removes the current hidden property on endBtn once the game starts
  createRandomPattern();
  playClueSequence()
}
function stopGame(){ //Does the same function as startGame, but for the opposite things
    gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden"); //Adds the hidden property  back to the stopBtn id once the game emds
  document.getElementById("startBtn").classList.remove("hidden"); //Removes the added hidden property from startBtn once the game ends
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime-=20 //Make the pattern faster, as to make the game harder each turn
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
  if(guessCounter == progress){
    if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    strikeCount++;
    if (strikeCount == 3){
      loseGame()
    }
    else{
      progress++;
      playClueSequence()
    }
  }
  // add game logic here
}
function loseGame(){
  stopGame();
  alert("Game Over. Try Again!");
}
function winGame(){
  stopGame();
  alert("Game Over. You Won!");
}
function createRandomPattern(){
  for (let j = 0; j<pattern.length; j++){
    pattern[j] = Math.ceil(Math.random()*5);
  }
}