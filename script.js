const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const tennisButtonElement = document.getElementById('tennis')
const rollerButtonElement = document.getElementById('roller-derby')
const soccerButtonElement = document.getElementById('soccer')
const bowlingButtonElement = document.getElementById('bowling')
const lacrosseElement = document.getElementById('lacrosse')
const waterPoloElement = document.getElementById('water-polo')




let shuffledQuestions, currentQuestionIndex
var totalPoints = ""


startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () => {
  questionContainerElement.classList.remove('hide')
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random - .5)
  currentQuestionIndex = 0
  
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}


function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
 
}



function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    
    //console.log(answer.text)
    //console.log(answer.points)
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.dataset.points = answer.points
    
    
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  var points = selectedButton.dataset.points
  totalPoints = totalPoints + points;
  console.log(points)
  console.log(totalPoints)
  
  
  
  
  
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
  }
  else {
    if (totalPoints == '-97750' || totalPoints == '-977-100') {
      
      tennisButtonElement.classList.remove('hide')
    }
    else if (totalPoints == '654-100') {
        
      lacrosseElement.classList.remove('hide')
    }
    else if (totalPoints == '-97760' || totalPoints == '-9771738') {
        
      bowlingButtonElement.classList.remove('hide')
    }
    else if (totalPoints == '654500' || totalPoints == '65450' ) {
        
      soccerButtonElement.classList.remove('hide')
    }
    else if (totalPoints == '6541738' ) {
        
      rollerButtonElement.classList.remove('hide')
    }
    else {
      waterPoloElement.classList.remove('hide')
    }
    console.log(totalPoints)
    //startButton.innerText = totalPoints
    //startButton.classList.remove('hide')
    totalPoints = 0
    questionContainerElement.classList.add('hide')
    

  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  /*
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
  */
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}




const questions = [

  
  {
    question: 'Do your prefer to work in teams or solo?',
    answers: [
      {text: 'In a team', correct: true, points: 654},
      {text: 'On my own', correct: false, points:-977}
    ]
    

   
    
    
  },
  {
    question: 'What do you focus on hitting when in the gym?',
    answers: [
      {text: "Arms - sun's out guns out", points: -100},
      {text: "I don't ever skip leg day", correct: false, points: 500 },
      {text: "I don't go to the gym", correct: false, points: 60},
      {text: 'Cardio', correct: false, points: 50},
      {text: 'Slaying', correct: true, points: 1738}
    ],
  }
]

