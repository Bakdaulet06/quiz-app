import { useParams } from 'react-router-dom'
import CreateQuiz from './CreateQuiz'
import { QuizClass } from './Quizzes'

const EditQuizWrapper = ({ quizzes }: { quizzes: QuizClass[] }) => {
  const { id } = useParams<{ id: string }>()
  const quiz = quizzes[Number(id)]

  if (!quiz) return <div className="p-4">Quiz not found</div>

  return <CreateQuiz quiz={quiz} />
}

export default EditQuizWrapper
