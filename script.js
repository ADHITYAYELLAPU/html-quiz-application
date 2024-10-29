
const startbutton = document.getElementById('start-btn')
const nextbutton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button')

let shuffledQuestion,currectQuestionIndex;
let quizscore =0;


startbutton.addEventListener('click',startGame)

nextbutton.addEventListener('click',()=>{
    currentQuestionIndex++
    setnextQuestion()
})

function startGame(){
    startbutton.classlist.add('hide')
        shuffledQuestions = questions.sort(()=> Math.random() -0.5)
        currectQuestionIndex = 0;
        questionContainerElement.classlist.remove('hide')
        setnextQuestion()
        quizscore=0
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[correctQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answer.foreach((answer) =>{
        const button = document.createElement('button')
        button.innerText= answer.text;
        button.classlist.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState(){
    clearStatusClass(document.body)
    nextbutton.classlist.add('hide')
    while(answerButtonsElement.firstchild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstchild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedBUtton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button.dataset.correct)
    })
    if(shuffledQuestions.length > currectQuestionIndex +1){
        nextbutton.classlist.remove("hide")
    }else{
        startbutton.innertext ="restart"
        startbutton.classlist.remove("hide")
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }
    document.getElementById('right-answer').innerText=quizScore
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classlist.add("correct")
    }else{
        element.classlist.add("wrong")
    }
}




function clearStatusClass(element){
    element.classlist.remove('correct')
    element.classlist.remove('wrong')
}
const questions =[
    {
        question: 'which one of these is a javascript framework?',
        answers :[
            { text: 'python', correct: false},
            { text: 'django', correct: false},
            { text: 'react', correct: true},
            { text: 'eclipse', correct: false},
        ],
    },
    {
        question: 'who is the prime minster of india?',
        answers :[
            { text: 'narendra modi', correct: true},
            { text: 'rahul gandhi', correct: false},

        ],
    },
    {
        question: 'what is 4*3?',
        answers :[
            { text: '6', correct: false},
            { text: '12', correct: true},

        ],
    },

]