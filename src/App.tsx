import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Quizzes, { QuizClass } from './components/Quizzes'
import CreateQuiz from './components/CreateQuiz'
import QuizStart from './components/StartQuiz'
import EditQuizWrapper from './components/EditQuizWrapper'
import StartQuizWrapper from './components/StartQuizWrapper'

const App = () => {
  const [quizzes, setQuizzes] = useState<QuizClass[]>([])
  const [quizTitle, setQuizTitle] = useState<string>('')
  const [activeInput, setActiveInput] = useState(false)

  function handleCreateQuiz() {
    if (!quizTitle) {
      alert('You have to name your quiz')
      return
    }
    for (let i = 0; i < quizzes.length; i++) {
      if (quizTitle === quizzes[i].title) {
        alert('This name is not available')
        return
      }
    }
    const newQuiz = new QuizClass(quizTitle, [])
    setQuizzes(prev => [...prev, newQuiz])
    setQuizTitle('')
    setActiveInput(false)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className='w-[300px] border border-black flex justify-center h-[200px] items-center'>
                {activeInput ? (
                  <div className='flex flex-col gap-3'>
                    <input placeholder="Title of the Quiz" value={quizTitle} onChange={e => setQuizTitle(e.target.value)} />
                    <div className='flex gap-3'>
                      <button onClick={() => setActiveInput(false)} className='btn bg-gray-500 hover:bg-gray-600'>Cancel</button>
                      <button onClick={handleCreateQuiz} className='btn bg-green-500 hover:bg-green-600'>Create Quiz</button>
                    </div>
                  </div>
                ) : (
                  <div onClick={() => setActiveInput(true)} style={{ cursor: 'pointer' }}
                    className='bg-gray-200 hover:bg-gray-300'>
                    Create Quiz
                  </div>
                )}
              </div>
              <Quizzes quizzes={quizzes} />
            </>
          }
        />

        {/* Wrappers extract the quiz and pass it to the actual components */}
        <Route path="/quiz/:id" element={<EditQuizWrapper quizzes={quizzes} />} />
        <Route path="/quiz/:id/start" element={<StartQuizWrapper quizzes={quizzes} />} />
      </Routes>
    </Router>
  )
}

export default App
