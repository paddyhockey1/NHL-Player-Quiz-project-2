const ducksQuizQuestions = [
    {
        imagePath: 'assets/images/mctavish.jpg',
        answers: [
            { text: "Troy Terry", correct: false },
            { text:"Mason McTavish", correct: true }, //Correct Answer//
            { text: "John Gibson", correct: false },
            { text: "Cam Fowler", correct: false }
        ]
    },

    {
        imagePath: 'assets/images/gibson.jpg',
        answers: [
            { text: "John Gibson", correct: true }, //Correct Answer//
            { text:"Jacob Silfverberg", correct: false },
            { text: "Leo Carlsson", correct: false },
            { text: "Brock McGinn", correct: false }
        ]
    },

    {
    imagePath: 'assets/images/fowler.jpg',
    answers: [
        { text: "Olen Zellweger", correct: false},
        { text: "Bo Groulx", correct: false },
        { text: "Cam Fowler", correct: true }, //Correct Answer //
        { text: "Lukas Dostal", correct: false }
    ]
    },
  
    { 
    imagePath: 'assets/images/gudas.jpg',
    answers: [
    { text: "Ross Johnston", correct: false },
    { text: "Pavel Mintyukov", correct: false },
    { text: "Trevor Zegras", correct: false },
    { text: "Radko Gudas", correct: true } //Correct Answer//
    ]    
},

    { 
    imagePath: 'assets/images/zegras.jpg',
    answers: [
        { text: "Olen Zellweger", correct: false },
        { text: "Alex Killorn", correct: false },
        { text: "Trevor Zegras", correct: true }, //Correct Answer//
        { text: "Brett Leason", correct: false }
    ]
    },
];
//--ducks-multiple-choice-questions-above--//


const mdQuizQuestions = [
    {
    imagePath: 'assets/images/selanne.jpg',
    answers: [
    { text: "Steve Rucchin", correct: false },
    { text: "Teemu Selanne", correct: true }, // Correct Answer //
    { text: "Oleg Tverdovsky", correct: false },
    { text: "Matt Cullen", correct: false }
    ]
    },

    {
        imagePath: 'assets/images/hebert.jpg',
        answers: [
        { text: "Guy Hebert", correct: true }, // Correct Answer //
        { text: "Patrik Kjellbred", correct: false }, 
        { text: "Martin Gerber", correct: false },
        { text: "Dan Bylsma", correct: false }
        ]
        },

        {
            imagePath: 'assets/images/rucchin.jpg',
            answers: [
            { text: "Jim Cummins", correct: false },
            { text: "Pavel Trnka", correct: false },
            { text: "Marty McInnis", correct: false },
            { text: "Steve Rucchin", correct: true } /*Correct Answer*/
            ]
            },
        
            {
            imagePath: 'assets/images/giguere.jpg',
            answers: [
            { text: "Mike Leclerc", correct: false },
            { text: "Jean-Sebastien Giguere", correct: true }, /*Correct Answer*/
            { text: "Jeff Friesen", correct: false },
            { text: "German Titov", correct: false }
            ]
            },

        {
            imagePath: 'assets/images/salei.jpg',
            answers: [
            { text: "Frederik Olausoon", correct: false },
            { text: "Andy McDonald", correct: false }, 
            { text: "Ruslan Salei", correct: true }, // Correct Answer //
            { text: "Keith Carney", correct: false }
            ]
            },
    ];

    const nhlQuizQuestions = [
        {
            imagePath: 'assets/images/crosby.jpg',
            answers: [
            { text: "Kris Letang", correct: false },
            { text: "Rickard Rakell", correct: false },
            { text: "Sidney Crosby", correct: true }, // Correct Answer //
            { text: "Evgeni Malkin", correct: false }
            ]
        },

        {
            imagePath: 'assets/images/mcdavid.jpg',
            answers: [
            { text:"Adam Henrique", correct: false },
            { text: "Connor McDavid", correct: true }, // Correct Answer //
            { text: "Ryan Nugent-Hopkins", correct: false },
            { text: "Adam Draisaitl", correct: false }
        
            ]
        },

        {
            imagePath: 'assets/images/mckinnon.jpg',
            answers: [
            { text:"Nikolai Kovalenko", correct: false },
            { text: "Samuel Girard", correct: false }, 
            { text: "Casey Mittlestadt", correct: false },
            { text: "Nathan McKinnon", correct: true } // Correct Answer //
            ]
        },

        {
            imagePath: 'assets/images/ovechkin.jpg',
            answers: [
            { text:"Alexander Ovechkin", correct: true }, // Correct Answer //
            { text: "Nicklas Backstrom", correct: false }, 
            { text: "TJ Oshie", correct: false },
            { text: "John Carlsson", correct: false }
            ]
        },

        {
            imagePath: 'assets/images/stamkos.jpg',
            answers: [
            { text:"Andrei Vasilevskiy", correct: false },
            { text: "Nikolai Kucherov", correct: false }, 
            { text: "Steven Stamkos", correct: true }, // Correct Answer //
            { text: "Victor Hedman", correct: false }
            ]
        },
    ];

const hofQuizQuestions = [
    {
    imagePath: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFrHn5DQp1kJuQ-Nh2bMcZqTp7k-p3wGwuEcoo-GgbqfAJNJV_',
    answers: [
    { text: "Bernie Parent", correct: false },
    { text: "Billy smith", correct: false },
    { text: "Tony Esposito", correct: false },
    { text: "Rogie Vachon", correct: true } /*Correct Answer*/
    ]
    },
  
    {
    imagePath: 'https://assets.nhle.com/mugs/nhl/latest/8448000.png',
    answers: [
    { text: "Alex Delvecchio", correct: false },
    { text: "Gordie Howe", correct: true }, /*Correct Answer*/
    { text: "Stan Mikita", correct: false },
    { text: "Mark Howe", correct: false }
    ]
    },
  
    {
    imagePath: 'https://assets.nhle.com/mugs/nhl/latest/8448321.png',
    answers: [
    { text: "Maurice Richard", correct: true }, /*Correct Answer*/
    { text: "Guy Carbonneau", correct: false },
    { text: "Ken Dryden", correct: false },
    { text: "Jean Beliveau", correct: false }
    ]
    },
  
    {
    imagePath: 'https://i0.wp.com/the-avocado.org/wp-content/uploads/2021/04/6B805F21-C7C7-444E-953F-16CED121CFFD.jpeg?resize=1020%2C768&ssl=1',
    answers: [
    { text: "Rogie Vachon", correct: false },
    { text: "Vladislav Tretiak", correct: true }, /*Correct Answer*/
    { text: "Gump Worsley", correct: false },
    { text: "Glenn Hall", correct: false }
    ]
    },
  
    {
    imagePath: 'https://assets.nhle.com/mugs/nhl/latest/8450070.png',
    answers: [
    { text: "Phil Esposito", correct: false },
    { text: "Derek Sanderson", correct: false },
    { text: "Bobby Orr", correct: true }, /*Correct Answer*/
    { text: "Reggie Leach", correct: false }
    ]
    },
    ];
  
    document.addEventListener("DOMContentLoaded", () => {
    const ducksQuizButton = document.querySelector(".ducks-quiz");
    const mdQuizButton = document.querySelector(".md-quiz");
    const nhlQuizButton = document.querySelector(".nhl-quiz");
    const hofQuizButton = document.querySelector(".hof-quiz");
    const ducksContent = document.getElementById("ducks-content");
    const mdContent = document.querySelector(".md-content");
    const nhlContent = document.querySelector(".nhl-content");
    const hofContent = document.querySelector(".hof-content");
    const quizContainer = document.getElementById("quiz-container");
    const scoreArea = document.querySelector(".score-area");
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const correctScore = document.getElementById("score");
    const incorrectScore = document.getElementById("incorrect");
    const stopQuizButton = document.getElementById("stop-quiz");
  
    let currentQuestionIndex = 0;
    let currentQuestions = [];
    let score = 0;
    let incorrectAnswers = 0;
  
    // Initially hide the quiz container and the "Stop Quiz" button
    quizContainer.classList.add("hidden");
    stopQuizButton.classList.add("hidden");
  
  
    ducksQuizButton.addEventListener("click", () => {
    startQuiz(ducksQuizQuestions);
    });

    mdQuizButton.addEventListener("click", () => {
    startQuiz(mdQuizQuestions);
    });
  
    nhlQuizButton.addEventListener("click", () => {
    startQuiz(nhlQuizQuestions);
    });
  
    hofQuizButton.addEventListener("click", () => {
    startQuiz(hofQuizQuestions);
    });
  
    function startQuiz(questionsArray) {
    // Hide the initial content and display the quiz container
    ducksContent.classList.add("hidden");
    mdContent.classList.add("hidden");
    nhlContent.classList.add("hidden");
    hofContent.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    scoreArea.style.display = "block";
  
    stopQuizButton.classList.remove("hidden");
    currentQuestions = questionsArray;
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = 0;
    nextButton.style.display = "none";
    showQuestion();
    updateScores();
    }
  
  
    function showQuestion() {
    resetState();
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionElement.innerHTML = `<img src="${currentQuestion.imagePath}" alt="Question Image" />`;
  
    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = `<span class="answer-text">${answer.text}</span>`;
    button.classList.add("btn");
    if (answer.correct) {
    button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
    });
    }
  
    function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    }
    }
  
    function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    const answer = currentQuestions[currentQuestionIndex].answers.find(ans => ans.text === selectedButton.innerText);
  
  
    if (answer.correct) {
    score++;
    } else {
    incorrectAnswers++;
    }
  
  
    Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    setStatusClass(button, button.dataset.correct === "true");
    });
  
  
    setTimeout(() => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
    nextQuestion();
    } else {
  
    alert(`Quiz finished! Your score is ${score}/${currentQuestions.length}.`);
  
    resetQuiz();
    }
    }, 1000);
  
  
    updateScores();
    }
  
    function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
    } else {
    alert(`Quiz finished! Your score is ${score}/${currentQuestions.length}.`);
    startQuiz(currentQuestions);
    }
    updateScores();
    }
  
    function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
    element.classList.add("correct");
    } else {
    element.classList.add("wrong");
    }
    }
  
    function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
    }
    function updateScores() {
    correctScore.textContent = score;
    incorrectScore.textContent = incorrectAnswers;
    }
    });