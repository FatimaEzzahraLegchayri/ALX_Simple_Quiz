const submit = document.getElementById('submit-answer')
const feedback = document.getElementById('feedback')

function checkAnswer(choice1, choice2, choice3){
    let correctAnswer = "4";   
    const userAnswer = document.querySelector('input[name="quiz"]:checked')
    
    if(correctAnswer === userAnswer){
        feedback.textContent = 'Correct! Well done.'
    }else{
        feedback.textContent = "That's incorrect. Try again!"
    }
}
submit.addEventListener('click',checkAnswer)