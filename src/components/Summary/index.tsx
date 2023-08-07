import { useContext } from 'react'
import { TaskContext } from '../../context/TasksContext'
import { EmptyList } from '../EmptyList'
import { Header } from './components/Header'
import * as S from './styles'
import { TaskList } from '../TaskList'

export function Summary() {
  const { tasks } = useContext(TaskContext)

  return (
    <S.Container>
      <Header />

      {tasks.length === 0 ? <EmptyList /> : <TaskList />}
    </S.Container>
  )
}
