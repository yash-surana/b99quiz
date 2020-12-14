var readlineSync = require("readline-sync");
const chalk = require("chalk") ;
var userName = readlineSync.question("Please enter your name : ");
var yellow = chalk.keyword('yellow')
console.log(yellow`
Welcome {bold ${userName}} to the {underline Brooklyn Nine Nine quiz!}
`);
console.log("Get ready to show how much you love the squad!");
console.log("\nAnswer only by entering a number as applicable to the question.")

function playQuiz(){
  var score = 0;

  var scoreList = [{name:"Yash",userScore:4
  },{
    name:"Gaurav", userScore : 2
  }
  ] 
  var highscore = [{name: "Yash", userScore:4}];
  var firstPlayer = highscore[0]
  var correctAnswer = chalk.cyanBright.bold
  var wrong = chalk.redBright.bold
  // // function for questions and answer
  function play(question,answer){
    console.log("-----------------")
    var answerGiven = readlineSync.question(question+"\nAnswer : ")

    if (answerGiven.toUpperCase() === answer.toUpperCase()){
      console.log(correctAnswer("Bingo! You got that right! "));
      score = score+ 1
    } else {
      console.log(wrong("Cool Cool Cool, No doubt! This wasn't right but try again! "));
      console.log("The right answer was", chalk.bold(answer));
    }
    console.log(yellow(chalk.bold`Your current score is {bgBlack ${score} }`));
  }

  // // array of questions
  var questionsArray = [{question : "Cheddar is the name of whose dog? \n1. Holt \n2. Gina ", answer : "1"},
  {question : "How many brothers does Amy have? \n1. Five \n2. Six \n3. Seven \n4. Eight ",
  answer : "3"},
  {question : "Where did Terry once live when pursuing a college education? \n1. Alaska \n2. Japan \n3. India \n4. Australia ",
  answer : "2"},
  {question : "Which member of the squad likes to stay in the office rather than in the line of fire? \n1. Terry \n2. Rosa \n3. Hitchcock \n4. Holt",
  answer : "1"},
  {question : "Who is the jokester of the precinct? \n1. Amy \n2. Charles \n3. Jake \n4. Gina", answer : "3"}
  ]

  // // for loop to ask questions
  function askQuestions(){
    for (var i = 0; i<questionsArray.length; i++){
      var questions = questionsArray[i]
      console.log(play(questions.question,questions.answer));
    }
    console.log("-----------------")
    console.log(yellow(chalk.bold`Your final score is {bgBlack ${score} }`));
    if (score >=3 ){
      console.log(chalk.bold("You seem like a true fan, HOT DAMN!!"));
    } else {
      console.log(chalk.bold("You seem new! Don't worry, you will love it!"));
    }
  }
  console.log(askQuestions());

  if (score>firstPlayer.userScore){
    console.log(yellow.bold`Congratulations! You are the new highscorer with ${score} points.`)
    highscore = {name : userName, userScore : score}
  }else if (score===firstPlayer.userScore){
    console.log(chalk.cyanBright.bold`Congratulations! You are tied for the first position with ${firstPlayer.name} at ${score} points`);
    highscore.push({name : userName, userScore : score});
  }else{
    console.log(chalk.redBright.bold`You missed the top spot by ${firstPlayer.userScore - score} points. Keep trying!`)
    console.log(yellow`The high score is held by ${firstPlayer.name} with ${firstPlayer.userScore} points.`)
  }
}
console.log(playQuiz())
// if else statement to continue game
if(readlineSync.keyInYN(chalk.bold.underline("Do you want to play again? "))){
  console.log(playQuiz());
}else {
  // Another key was pressed.
  console.log(chalk.bold('\nDamn! Meet you later'));
}

