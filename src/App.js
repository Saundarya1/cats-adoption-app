import React from 'react';
import { useState } from 'react';
import { cats } from './assets/arrays/cats';
import { questions } from './assets/arrays/questions';
import wool from './assets/images/wool2.png';
import Question from './components/Question/question.js';
import CatSwiper from './components/CatSwiper/catSwiper.js';


function App() {



  const [currentStep, setStep] = useState(1);

  const [userAnswers, setAnswers] = useState([]);

  const [filteredCats, setFilteredCats] = useState([]);

  const [showWarning, setShowWarning] = useState(true);

  console.log(userAnswers);


  function handleNextStep(event) {

    const questionNumber = event.target.id;
    setAnswers(prevAnswers => [...prevAnswers, questionNumber]);
    setStep(currentStep + 1);
  }


  function handlePreviousStep() {

    setAnswers(prevAnswers => {
      const deleteAnswer = [...prevAnswers];
      deleteAnswer.pop();
      return deleteAnswer;
    })
    setStep(currentStep - 1);
  }


  function filterCats() {

    const filteredCats = cats.filter(obj => {
      let match = true;
      for (let i = 0; i < userAnswers.length; i++) {
        const catProp = Object.keys(obj)[i];
        if (obj[catProp] !== userAnswers[i]) {
          match = false;
          break;
        }
      }
      return match;
    });
    setFilteredCats(filteredCats);
  }


  function filterAndStep() {
    filterCats()
    setStep(currentStep + 1)
  }

  const toggleWarning = () => {
    setShowWarning(!showWarning);
  };


  return (
    <div className="App">

      {showWarning &&
        <div className='warning'>
          <p>Warning!</p>
          Last times, the foundation I am helping, was splitted in two separate ones.
          Therefore some of the links to the cats on foundation's site may not work.
          The rest of the app should work correctly.
          Thank you for understanding!
          <button className="warningBtn" onClick={toggleWarning}>OK</button>
        </div>
      }

      {questions.map((question, index) => (

        currentStep === index + 1 && index <= questions.length + 1 && (

          <div className="quiz-container">
            <Question
              userQuestion={question.question}
              userAnswer1={question.leftBtn}
              userAnswer2={question.rightBtn}
              currentStep={currentStep}
              handleNextStep={handleNextStep}
            />
            {index > 0 &&
              <button className="wool" onClick={handlePreviousStep}><img src={wool} /></button>
            }

          </div>
        )
      ))}

      {currentStep === questions.length + 1 && (
        <div>
          <button onClick={filterAndStep} className='show-cats-btn'>Kliknij i poznaj kandydatów!</button>
          <button className="wool" onClick={handlePreviousStep}><img src={wool} /></button>
        </div>
      )}

      {currentStep === questions.length + 2 && (


        <CatSwiper
          firstArray={filteredCats}
          secondArray={userAnswers}
          setAnswers={setAnswers}
          setNewCats={filterCats}
        />

      )}


    </div>

  );
}

export default App;