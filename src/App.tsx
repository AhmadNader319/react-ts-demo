import { QuestionCard } from "./components/QuestionCard"

export const App = () => {
  
  // Function to start the quiz
  const startQuiz = async () => {

  }

  // Function to check the selected answer 
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  // Function to move to the next question
  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>ReactQuiz</h1>
      {/* Button to start the quiz */}
      <button className="start" onClick={startQuiz}>start</button>
      {/* Display the score */}
      <p className="score">Score: </p>
      {/* <p>Loading Questions ...</p> */}
      <QuestionCard question={""} answer={[]} callBack={undefined} userAnswer={""} questionNumber={0} totalQuestion={0}></QuestionCard>
      {/* Button to the next question */}
      <button className="next" onClick={nextQuestion}>nextQuestion</button>
    </div>
  );
}