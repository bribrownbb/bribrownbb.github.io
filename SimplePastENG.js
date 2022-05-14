let conjugWord;
let savedConWord;
let savedInput;
let yourAnswer;
let genWord;
let switchState = true;
let banner;
let correctTracker = 0;
let incorrectTracker = 0;
let totalTracker=0;


let scoreTrackerTop = document.getElementById("scoreTop");
scoreTrackerTop.textContent = "正しい: ";

let scoreTrackerMiddle = document.getElementById("scoreMiddle");
scoreTrackerMiddle.textContent = "間違い: ";

let scoreTrackerBottom = document.getElementById("scoreBottom");
scoreTrackerBottom.textContent = "総計: ";

let instruction = document.getElementById("instructBox");
instruction.textContent = "動詞の過去形:";

let correctAnswer = document.getElementById("correctAnswerBox");

//Create an array to store 9 words
let wordArray = ["love","can", "drink", "get", "have", "buy", "say","write", "come", "sit", "ride", "hurry", "want", "live", "help", "bake", "play", "relax", "visit", "study", "talk", "study"];
//let wordArray =["食べる"];
//randomly select a word from the array 0-12
let randomNum = Math.floor(Math.random()*22);
genWord = wordArray[randomNum];


//Put randomly selected verb on the screen
let verbBox = document.getElementById("verbBox");
verbBox.innerHTML += wordArray[randomNum];


//Take in the users input
let switcher = 0;
let userInput = document.querySelector("input");
function submitInput(e){
  if(e.keyCode == 13){
    if((switcher%2)===0){
    savedInput = userInput.value;
    //console.log(savedInput);
    userInput.value = "";
    savedConjugWord = conjugate();
    printAnswer();
    checkAnswer();
    switcher++;
    }
    else{
      newWord();
      switcher--;
      userInput.value="";
    }  
  }
}
userInput.addEventListener("keyup",submitInput);
//userInput.addEventListener("keyup",clear);

function randomWord(){
randomNum = Math.floor(Math.random()*22);
genWord = wordArray[randomNum];
verbBox.innerHTML += wordArray[randomNum];
}

function newWord(){
  verbBox.innerHTML += genWord;
  clear();
  randomWord();

}

function checkAnswer(){
  if(savedInput == savedConjugWord){
    banner = document.getElementById("banner");
    banner.textContent = "正しい";
    banner.style.color = "green";
    correctAnswer.textContent = savedConjugWord;
    correctAnswer.style.color="green";
    correctTracker++;
    scoreTrackerTop.textContent = "正しい: "+correctTracker;
    totalTracker++
    scoreTrackerBottom.textContent = "総計: "+totalTracker;

  }
  if (savedInput != savedConjugWord){
    banner = document.getElementById("banner");
    banner.textContent = "間違い";
    banner.style.color = "red";
    correctAnswer.textContent = savedConjugWord;
    correctAnswer.style.color="red";
    incorrectTracker++;
    scoreTrackerMiddle.textContent = "間違い: "+incorrectTracker;
    totalTracker++
    scoreTrackerBottom.textContent = "総計: "+totalTracker;
  }
}

function printAnswer(){
  yourAnswer = document.getElementById("yourAnswerBox");
  yourAnswer.innerHTML += "あなたの答え: " + savedInput;
}

function clear(){
  yourAnswer.innerHTML="";
  correctAnswer.innerHTML="";
  verbBox.innerHTML="";
  banner.innerHTML="";

}


function conjugate(){
  if ((genWord != "can")&&(genWord != "drink")&&(genWord !="get")&&(genWord !="have")&&(genWord != "buy")&&(genWord !="say")&&(genWord !="ride" )&&(genWord != "write")&&(genWord != "come")&&(genWord != "sit")&& (genWord != "study")&&(genWord.charAt(genWord.length-1)=="e")){
    conjugWord = genWord+"d";
    return conjugWord;

  }

  else if ((genWord != "can")&&(genWord != "drink")&&(genWord !="get")&&(genWord !="have")&&(genWord != "buy")&&(genWord !="say")&&(genWord !="ride" )&&(genWord != "write")&&(genWord != "come")&&(genWord != "sit")&& (genWord != "study")&&(genWord.charAt(genWord.length-1)!="e")&&(genWord.charAt(genWord.length-1)!="y")){
    conjugWord = genWord+"ed";
    return conjugWord;

  }
  

  else if ((genWord != "can")&&(genWord != "drink")&&(genWord !="get")&&(genWord !="have")&&(genWord != "buy")&&(genWord !="say")&&(genWord !="ride" )&&(genWord != "write")&&(genWord != "come")&&(genWord != "sit")&& (genWord != "study")&&(genWord.charAt(genWord.length-1)=="y")&&
  (genWord.charAt(genWord.length-2)!= "a"&&
  genWord.charAt(genWord.length-2)!="e"&&
  genWord.charAt(genWord.length-2)!="i"&&
  genWord.charAt(genWord.length-2)!="o"&&
  genWord.charAt(genWord.length-2)!="u")){
    conjugWord = genWord.replace("y","ied");
    return conjugWord;

  }

  else if ((genWord != "can")&&(genWord != "drink")&&(genWord !="get")&&(genWord !="have")&&(genWord != "buy")&&(genWord !="say")&&(genWord !="ride" )&&(genWord != "write")&&(genWord != "come")&&(genWord != "sit")&& (genWord != "study")&&(genWord.charAt(genWord.length-1)=="y")&&
  (genWord.charAt(genWord.length-2)== "a"||
  genWord.charAt(genWord.length-2)=="e"||
  genWord.charAt(genWord.length-2)=="i"||
  genWord.charAt(genWord.length-2)=="o"||
  genWord.charAt(genWord.length-2)=="u")){
    conjugWord = genWord+"ed";
    return conjugWord;

  }
 
  //Irregular Word can
  else if(genWord == "can"){
    conjugWord = "could";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word drink
  else if (genWord=="drink"){
    conjugWord = "drank";
    console.log(conjugWord);
    return conjugWord;
  }
  //Irregular Word get
  else if(genWord == "get"){
    conjugWord = "got";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word have
  else if(genWord == "have"){
    conjugWord = "had";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word buy
  else if(genWord == "buy"){
    conjugWord = "bought";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word say
  else if(genWord == "say"){
    conjugWord = "said";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word ride
  else if(genWord == "ride"){
    conjugWord = "rode";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word write
  else if(genWord == "write"){
    conjugWord = "wrote";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word come
  else if(genWord == "come"){
    conjugWord = "came";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word sit
  else if(genWord == "sit"){
    conjugWord = "sat";
    console.log(conjugWord);
    return conjugWord;
  }
  else if(genWord =="study"){
    conjugWord = "studied";
    console.log(conjugWord);
    return conjugWord;
  }  
}



//function checkAnswer(e){
  //userInput.textContent = e.target.value;
  //if(user)
//}
