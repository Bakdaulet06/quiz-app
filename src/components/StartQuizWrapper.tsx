import { useParams } from 'react-router-dom'
import QuizStart from './StartQuiz'
import { QuizClass } from './Quizzes'

const StartQuizWrapper = ({ quizzes }: { quizzes: QuizClass[] }) => {
  const { id } = useParams<{ id: string }>()
  const quiz = quizzes[Number(id)]

  if (!quiz) return <div className="p-4">Quiz not found</div>

  return <QuizStart quiz={quiz} />
}

export default StartQuizWrapper
