import React from 'react';
import { useState, useEffect } from 'react';
import backgroundFrame from './assets/images/backgroundFrame.png';
import { cats } from './assets/arrays/cats';
import { questions } from './assets/arrays/questions';
import wool from './assets/images/wool2.png';
import Question from './components/Question/question.js';
import CatSwiper from './components/CatSwiper/catSwiper.js';


function App() {

  //ZMIENNE

  const [currentStep, setStep] = useState(1);

  const [userAnswers, setAnswers] = useState([]);

  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => { }, [userAnswers]);


  console.log(userAnswers);

  function handleNextStep(event) {

    const questionNumber = event.target.id;
    setAnswers(prevAnswers => [...prevAnswers, questionNumber]);
    setStep(currentStep + 1);
  }

  //FUNKCJE

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
        if (catProp !== ("name" || "img" || "url") && obj[catProp] !== userAnswers[i]) { //potrzebujesz tylko tablicy z odpowiedzi
          match = false;
          break;
        }
      }
      return match;
    });

    setFilteredCats(filteredCats);
    setStep(currentStep + 1);
    console.log(filteredCats);
  }

  //APP

  return (
    <div className="App"

      style={{
        backgroundImage: `url(${backgroundFrame})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "100vw",
        height: "100vh",
        backgroundPosition: "center",
        position: "absolute",
        zIndex: "-1"
      }}>


      {questions.map((question, index) => (

        currentStep === index + 1 && index <= questions.length + 1 && (

          <div>
            <Question
              userQuestion={question.question}
              userAnswer1={question.leftBtn}
              userAnswer2={question.rightBtn}
              currentStep={currentStep}
              handleNextStep={handleNextStep}
            />
            <button className="wool" onClick={handlePreviousStep}><img src={wool} /></button>
          </div>
        )
      ))}

      {currentStep === questions.length + 1 && (
        <div>
          <button onClick={filterCats} className='showCatsBtn'>Kliknij i poznaj kandydatów!</button>
          <button className="wool" onClick={handlePreviousStep}><img src={wool} /></button>
        </div>
      )}

      {currentStep === questions.length + 2 && (

        <div>
          <CatSwiper
            firstArray={filteredCats}
            secondArray={userAnswers}
            setAnswers={setAnswers}
          />
        </div>

      )}


    </div>

  );
}

export default App;