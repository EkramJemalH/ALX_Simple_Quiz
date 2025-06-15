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
  const correctAnswer = checkAnswer();
  if (submitedAnswer) {
    const userAnswer = parseInt(submitedAnswer.value);
    if (userAnswer === correctAnswer) {
      feedback.innerHTML = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.innerHTML = "That's incorrect. Try again!";
      feedback.style.color = "red";
    }
  } else {
    feedback.innerHTML = "Please select an answer";
    feedback.style.color = "orange";
  }
});
