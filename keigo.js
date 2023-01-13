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
scoreTrackerTop.textContent = "Correct: ";

let scoreTrackerMiddle = document.getElementById("scoreMiddle");
scoreTrackerMiddle.textContent = "Incorrect: ";

let scoreTrackerBottom = document.getElementById("scoreBottom");
scoreTrackerBottom.textContent = "Total: ";

let instruction = document.getElementById("instructBox");
instruction.textContent = "Causitive Form Conjugation:";

let correctAnswer = document.getElementById("correctAnswerBox");

//Create an array to store 9 words
let wordArray = ["食べる","飲む","話す","言う","使う","聞く","開ける","閉める","付ける","する","くる","帰る","入る","しゃべる","要る","知る","走る"];
//let wordArray =["食べる"];
//randomly select a word from the array 0-12
let randomNum = Math.floor(Math.random()*17);
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
randomNum = Math.floor(Math.random()*17);
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
    banner.textContent = "CORRECT";
    banner.style.color = "green";
    correctAnswer.textContent = savedConjugWord;
    correctAnswer.style.color="green";
    correctTracker++;
    scoreTrackerTop.textContent = "Correct: "+correctTracker;
    totalTracker++
    scoreTrackerBottom.textContent = "Total: "+totalTracker;

  }
  if (savedInput != savedConjugWord){
    banner = document.getElementById("banner");
    banner.textContent = "INCORRECT";
    banner.style.color = "red";
    correctAnswer.textContent = savedConjugWord;
    correctAnswer.style.color="red";
    incorrectTracker++;
    scoreTrackerMiddle.textContent = "Incorrect: "+incorrectTracker;
    totalTracker++
    scoreTrackerBottom.textContent = "Total: "+totalTracker;
  }
}

function printAnswer(){
  yourAnswer = document.getElementById("yourAnswerBox");
  yourAnswer.innerHTML += "Your answer: " + savedInput;
}

function clear(){
  yourAnswer.innerHTML="";
  correctAnswer.innerHTML="";
  verbBox.innerHTML="";
  banner.innerHTML="";

}


function conjugate(){
  //る-Verbs Conjugation rules including Irregular words
  if( ((genWord != "くる" )&&(genWord != "する")&&(genWord != "帰る")&&(genWord != "入る")&&(genWord != "しゃべる")&&(genWord != "要る")&&(genWord != "知る")&&(genWord != "走る")) && (genWord.charAt(genWord.length-1)=="る") && (genWord.charAt(genWord-2)== "え" ||"け"|| "せ"|| "て"||"ね"||"へ"||"め"||"れ"||"げ"||"ぜ"||"で"||"べ"||"ぺ"||"い"||"き"||
  "し"||"ち"||"に"||"ひ"||"み"||"り"||"ぎ"||"じ"||"ぢ"||"び"||"ぴ")){
    conjugWord = genWord.replace("る","させられる");
    console.log(conjugWord);
    return conjugWord;
  }
  
  //う-Verbs Conjugation rules
  else if(genWord.charAt(genWord.length-1)== "う"){
      conjugWord = genWord.replace("う","わせられる")
      console.log(conjugWord);
      return conjugWord;
  }
  else if(genWord.charAt(genWord.length-1)== "つ"){
      conjugWord = genWord.replace("つ","たせられる")
      console.log(conjugWord);
      return conjugWord;
  }
  else if((genWord.charAt(genWord.length-1)== "る")&& (genWord !="する")&&(genWord !="くる")){
      conjugWord = genWord.replace("る","らせられる")
      console.log(conjugWord);
      return conjugWord;
  }
  else if(genWord.charAt(genWord.length-1)== "む"){
      conjugWord = genWord.replace("む","ませられる")
      console.log(conjugWord);
      return conjugWord;
  }
  else if(genWord.charAt(genWord.length-1)== "ぶ"){
    conjugWord = genWord.replace("ぶ","ばせられる")
    console.log(conjugWord);
    return conjugWord;
  }
  else if(genWord.charAt(genWord.length-1)== "ぬ"){
    conjugWord = genWord.replace("ぬ","なせられる")
    console.log(conjugWord);
    return conjugWord;
  }
  else if(genWord.charAt(genWord.length-1)== "く"){
    conjugWord = genWord.replace("く","かせられる")
    console.log(conjugWord);
    return conjugWord;
  }
  else if(genWord.charAt(genWord.length-1)== "ぐ"){
    conjugWord = genWord.replace("ぐ","がせられる")
    console.log(conjugWord);
    return conjugWord;
  }
  else if(genWord.charAt(genWord.length-1)== "す"){
    conjugWord = genWord.replace("す","させられる")
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word する
  else if(genWord == "する"){
    conjugWord = "させられる";
    console.log(conjugWord);
    return conjugWord;
  }

  //Irregular Word くる
  else if (genWord=="くる"){
    conjugWord = "こさせられる";
    console.log(conjugWord);
    return conjugWord;
  }

}

//function checkAnswer(e){
  //userInput.textContent = e.target.value;
  //if(user)
//}
