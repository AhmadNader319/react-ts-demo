import React from "react";
//unnecessary
// Define the props for the QuestionCard component
type Props = {
    question: string;
    answer: string[];
    callBack: any;
    userAnswer: string;
    questionNumber: number;
    totalQuestion: number;
}

// QuestionCard receives props and displays question information
export const QuestionCard: React.FC<Props> = ({ question, answer, callBack, userAnswer, questionNumber, totalQuestion }) => (
    <div>
        {/* Display the question number and total number of questions */}
        <p className="QuestionNumber">
            Question: {questionNumber} / {totalQuestion}
        </p>
        {/* Display the question text */}
        <p>{question}</p>
    </div>
);
