const questions = [
  {
    question: " Q1: which is your home town?",
    a: "ktm",
    b: "janakpur",
    c: "birgunj",
    d: "pokhara",
    ans: "ans4",
  },
  {
    question: "Q2: what is the fullform of Css?",
    a: "cascas=ding style sheet",
    b: "style sheet",
    c: "common style sheet",
    d: "card sheet",
    ans: "ans1",
  },
  {
    question: "Q3: what is the fullform of http?",
    a: "hypertext transfer product",
    b: "hey transfer",
    c: "hypertext part",
    d: "hypertext transfer protocol",
    ans: "ans4",
  },
  {
    question: "Q4: what is the fullform of HTML?",
    a: "htpertext make up language",
    b: "hypertext mark up language",
    c: "hypertext module language",
    d: "hard code mark up language",
    ans: "ans1",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;
function loadQuestion() {
  const questionList = questions[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
}
loadQuestion();

function getCheckAnswer() {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
}

function selectedAns() {
  const checkedAnswer = getCheckAnswer();
  if(checkedAnswer === undefined) {
      alert('please select an answer');
      return;
  }
  console.log(checkedAnswer);
  if (checkedAnswer.id === questions[questionCount].ans) {
    score++;
  }

  questionCount++;
  if (questionCount < questions.length) {
    loadQuestion();
  } else {
    // showScore.innerHTML ='<h3>you scored' + score + '/' + questions.length+'</h3>';

    document.querySelector('#submit').disabled = true;
    showScore.innerHTML = `<h3>you scored ${score}/${questions.length}</h3><button class="btn" onClick="restartQuiz()">Restart</button>`;
    showScore.classList.remove("scoreArea");
  }
}

function restartQuiz() {
    document.querySelector('#submit').disabled = false;
    location.reload();
}
