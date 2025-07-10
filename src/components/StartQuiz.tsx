import { useState } from "react";
import type { QuizClass } from "./Quizzes";

const QuizStart = ({quiz} : {quiz: QuizClass}) =>{
    return(
        <>
            {quiz.questions.length === 0 ? 
            <div>
                There is no questions in the quiz!
            </div>:
            <div>
                {quiz.questions.map((question,index) => 
                    <div key={index}>
                        <h2>{question.question}</h2>
                        
                    </div>
                )}
            </div>
            }
        </>
    )
}

export default QuizStart
