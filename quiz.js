const correctAnswer = 4;
const submitBtn = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");
function checkAnswer() {
  return correctAnswer;
}
if (feedback) {
  feedback.style.display = "block";
}
submitBtn.addEventListener("click", function () {
  let submitedAnswer = document.querySelector('input[name="quiz"]:checked');
  let isCorrect = checkAnswer();
  if (submitedAnswer) {
    let userAnswer = submitedAnswer.value;
    if (parseInt(userAnswer) === isCorrect) {
      feedback.innerHTML = "Correct answer";
      feedback.style.color = "green";
    } else {
      feedback.innerHTML = "wrong answer";
      feedback.style.color = "red";
    }
  } else {
    feedback.innerHTML = "Please select an answer";
    feedback.style.color = "orange";
  }
});
