const   questions=[
    {
        question:'Who is the Best in the World ?',
        answers:[
            {text:'Yalda' , correct:true},
            {text:'Madina' , correct:false},
            {text:'Raheel' , correct:false},
            {text:'Sahra' , correct:false}
        ]
    },{
            question: 'What is the capital of France?',
            answers: [
                { text: 'London', correct: false },
                { text: 'Berlin', correct: false },
                { text: 'Paris', correct: true },
                { text: 'Madrid', correct: false }
            ]
        },
        {
            question: 'Which planet is known as the Red Planet?',
            answers: [
                { text: 'Venus', correct: false },
                { text: 'Mars', correct: true },
                { text: 'Jupiter', correct: false },
                { text: 'Saturn', correct: false }
            ]
        },
        {
            question: 'Who wrote "Hamlet"?',
            answers: [
                { text: 'J.K. Rowling', correct: false },
                { text: 'Mark Twain', correct: false },
                { text: 'William Shakespeare', correct: true },
                { text: 'Charles Dickens', correct: false }
            ]
        },
        {
            question: 'What is the largest ocean on Earth?',
            answers: [
                { text: 'Atlantic Ocean', correct: false },
                { text: 'Pacific Ocean', correct: true },
                { text: 'Indian Ocean', correct: false },
                { text: 'Arctic Ocean', correct: false }
            ]
        },
        {
            question: 'Which country is famous for the Great Wall?',
            answers: [
                { text: 'Russia', correct: false },
                { text: 'India', correct: false },
                { text: 'Japan', correct: false },
                { text: 'China', correct: true }
            ]
        },
        {
            question: 'What is the fastest land animal?',
            answers: [
                { text: 'Cheetah', correct: true },
                { text: 'Lion', correct: false },
                { text: 'Horse', correct: false },
                { text: 'Kangaroo', correct: false }
            ]
        },
        {
            question: 'Which element has the chemical symbol "O"?',
            answers: [
                { text: 'Gold', correct: false },
                { text: 'Oxygen', correct: true },
                { text: 'Osmium', correct: false },
                { text: 'Iron', correct: false }
            ]
        },
        {
            question: 'What is the main ingredient in guacamole?',
            answers: [
                { text: 'Lime', correct: false },
                { text: 'Tomato', correct: false },
                { text: 'Onion', correct: false },
                { text: 'Avocado', correct: true }
            ]
        },
        {
            question: 'Which company created the iPhone?',
            answers: [
                { text: 'Google', correct: false },
                { text: 'Microsoft', correct: false },
                { text: 'Samsung', correct: false },
                { text: 'Apple', correct: true }
            ]
        },
        {
            question: 'How many continents are there on Earth?',
            answers: [
                { text: '5', correct: false },
                { text: '6', correct: false },
                { text: '7', correct: true },
                { text: '8', correct: false }
            ]
        }   
];

const questionElement=document.getElementById('question');
const answerBtn=document.getElementById('answer-butttons');
const nextBtn=document.getElementById('next-btn');

let currentQuestionIndex =0;
let score=0;



function startQuiz(){

     currentQuestionIndex = 0;
     score = 0;
     nextBtn.innerHTML="Next";
     showQuestion();    
}

function showQuestion(){
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo =  currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.
    question;

        currentQuestion.answers.forEach (answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button)
    });
}
startQuiz();

