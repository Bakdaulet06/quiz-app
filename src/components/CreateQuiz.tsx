import { useState } from "react"
import type { QuizClass } from "./Quizzes"
import { Question } from "./Quizzes"
const CreateQuiz = ({quiz}: {quiz: QuizClass}) =>{
    const [questions, setQuestions] = useState<Question[]>(quiz.questions)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')
    const [numberOfQuestions, setNumberOfQuestions] = useState(quiz.questions.length)
    function createQuestion(){
        if(!question || !answer){
            alert('Please fill out the form')
            return
        }
        const newQuestion = new Question(question, answer)
        quiz.questions.push(newQuestion)
        quiz.answers.push(answer)
        setQuestions(prev => [...prev, newQuestion])
        setQuestion('')
        setAnswer('')
        setNumberOfQuestions(questions.length)
    }

    function handleEditState(initialState: boolean, state: boolean){
        initialState = state
    }
    function deleteQuestion(index: number){
        setQuestions(prev => prev.filter((_,id) => id!==index))
        setNumberOfQuestions(questions.length)
    }
    return(
        <>
        <div className="container">
            <div className="flex flex-col gap-3 py-5 border-b">
                <h1 className="font-bold text-4xl">{quiz.title}</h1>
                <p>Number of questions: {numberOfQuestions}</p>
            </div>
            <div className="py-5 border-b flex justify-between">
                <input type="text" placeholder="Enter the question" value={question} onChange={e => setQuestion(e.target.value)}/>
                <input type="text" placeholder="Enter the answer" value={answer} onChange={e => setAnswer(e.target.value)}/>
                <div><button onClick={createQuestion} className="btn bg-green-500 hover:bg-green-600">Create Question</button></div>
            </div>
            <div className="flex flex-col gap-5 py-5">
                <div className="flex">
                <h1 className="w-full max-w-[400px]">Question</h1>
                <h1 className="w-full max-w-[400px]">Answer</h1>
                </div>
                {questions.map((question,id)=> 
                <div key={id}>
                    {question.editState ? (
                        <div>
                            <input type="text" value={question.question} onChange={e => setQuestion(e.target.value)}/>
                            <input type="text" value={question.answer} onChange={e => setAnswer(e.target.value)}/>
                            <button className="btn bg-green-500 hover:bg-green-600"
                            onClick={()=>handleEditState(question.editState, false)}>Save</button>
                        </div>
                    ):(
                        <div className="flex justify-between gap-3 items-center">
                            <p className="w-full max-w-[400px]">{question.question}</p>
                            <p className="w-full max-w-[400px]">{question.answer}</p>
                            <div className="flex gap-3">
                                <button className="btn bg-orange-500 hover:bg-orange-600" onClick={() => handleEditState(question.editState, true)}>Edit Question</button>
                                <button className="btn bg-red-500 hover:bg-red-600" onClick={() => deleteQuestion(id)}>Delete Question</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            </div>

        </div>

        </>
    )
}
export default CreateQuiz