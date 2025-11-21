 const correctAnswers = {
      q1:"a",q2:"b",q3:"b",q4:"a",q5:"b",
      q6:"c",q7:"a",q8:"a",q9:"b",q10:"a",
      q11:"a",q12:"b",q13:"b",q14:"b",q15:"a",
      q16:"a",q17:"a",q18:"b",q19:"b",q20:"b"
    };

    function finishQuiz(){
      let score = 0;
      const form = document.getElementById('quizForm');
      const formData = new FormData(form);
      const wrongList = [];

      for(let key in correctAnswers){
        if(formData.get(key) === correctAnswers[key]){
          score++;
        } else {
          wrongList.push(key);
        }
      }

      const percent = Math.round((score / 20) * 100);
      const result = document.getElementById('result');
      result.innerHTML = `Natija: ${score}/20 (${percent}%)<br>`;

      

      result.innerHTML += `<button class="showErrors" onclick="showMistakes()">Xatolarni ko‘rish</button>`;
      window.scrollTo(0, document.body.scrollHeight);

      window.userMistakes = wrongList; 
    }

    function showMistakes(){
      const allQuestions = document.querySelectorAll('.question');
      allQuestions.forEach((q, i) => {
        q.classList.remove('wrong');
      });
      userMistakes.forEach(id => {
        const num = parseInt(id.replace('q','')) - 1;
        document.querySelectorAll('.question')[num].classList.add('wrong');
      });
      window.scrollTo(0, 0);
    }