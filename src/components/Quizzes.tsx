import { useState } from "react"
import { Route, useNavigate } from "react-router-dom"

const Quizzes = ({quizzes}: {quizzes: QuizClass[]}) =>{
    const navigate = useNavigate()
    return(
        <>
        <div className="flex gap-5">
        {quizzes.map((quiz, index) => (
        <div key={index} className="group relative flex flex-col gap-5 cursor-pointer"
        >
          <div className="quizCard bg-white p-4 rounded shadow-md" onClick={() => navigate(`/quiz/${index}/start`)}>
            <h1 className="font-bold text-2xl">{quiz.title}</h1>
            <p className="text-sm text-gray-500">Score: 0/{quiz.questions.length}</p>
          </div>

          {/* Hover buttons */}
          <div className=" top-2 right-2 hidden group-hover:flex gap-2">
            <button className="bg-yellow-400 px-3 py-1 rounded text-sm cursor-pointer" onClick={() => navigate(`/quiz/${index}`)}>Edit</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-sm cursor-pointer">Delete</button>
          </div>
        </div>
      ))}
        </div>

        </>
    )
}

export class QuizClass{
    title: string
    questions: Question[]
    answers: string[]
    constructor(title: string, questions: Question[]){
        this.title = title
        this.questions = questions
        this.answers = []
    }
}

export class Question{
    question: string
    answer: string
    editState: boolean
    constructor(question: string, answer: string){
        this.question = question
        this.answer = answer
        this.editState = false
    }
}

export default Quizzes