const submit = document.getElementById('submit-answer')
const feedback = document.getElementById('feedback')

function checkAnswer(){
    let correctAnswer = "4";   
    const choice = document.querySelector(`input[name = 'quiz']:checked`)  
    const userAnswer = choice['value']
    if(userAnswer === correctAnswer){
        feedback.textContent = 'Correct! Well done.'
    }else{
        feedback.textContent = "That's incorrect. Try again!"
    }
}
submit.addEventListener('click',checkAnswer)
console.log('user ',userAnswer);