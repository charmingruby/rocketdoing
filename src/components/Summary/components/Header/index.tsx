import { useContext } from 'react'
import { TaskContext } from '../../../../context/TasksContext'
import * as S from './styles'

export function Header() {
  const { tasks } = useContext(TaskContext)
  const amountOfFinishedTasks = tasks.filter((task) => task.isComplete).length

  return (
    <S.Container>
      <S.Content>
        <S.Title type="created">Tarefas criadas</S.Title>
        <S.Metrics>{tasks.length}</S.Metrics>
      </S.Content>

      <S.Content>
        <S.Title type="done">Tarefas concluidas</S.Title>
        <S.Metrics>{`${amountOfFinishedTasks} de ${tasks.length}`}</S.Metrics>
      </S.Content>
    </S.Container>
  )
}
