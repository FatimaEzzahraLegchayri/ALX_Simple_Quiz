const submit = document.getElementById('submit-answer')
const feedback = document.getElementById('feedback')

function checkAnswer(){
    let correctAnswer = "4";   
    const userAnswer = document.querySelector(`input[name = 'quiz']:checked`)  
    
    if(correctAnswer === userAnswer["value"]){
        feedback.textContent = 'Correct! Well done.'
    }else{
        feedback.textContent = "That's incorrect. Try again!"
    }
}
submit.addEventListener('click',checkAnswer)
console.log('user ',userAnswer);