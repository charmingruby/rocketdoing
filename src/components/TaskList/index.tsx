import { Check, Trash } from 'phosphor-react'
import * as S from './styles'
import { useContext } from 'react'
import { TaskContext } from '../../context/TasksContext'

export function TaskList() {
  const { tasks, deleteTask, changeTaskStatus } = useContext(TaskContext)

  return (
    <S.TaskWrapper>
      {tasks.map((task) => (
        <S.TaskContainer
          key={task.title}
          status={task.isComplete ? 'checked' : 'unchecked'}
        >
          <input type="checkbox" id="is-complete" checked={task.isComplete} />
          {task.isComplete ? (
            <S.CheckedCheckbox
              htmlFor="is-complete"
              onClick={() => changeTaskStatus({ title: task.title })}
            >
              <Check size={14} />
            </S.CheckedCheckbox>
          ) : (
            <S.Checkbox
              htmlFor="is-complete"
              onClick={() => changeTaskStatus({ title: task.title })}
            />
          )}

          <p>{task.title}</p>

          <S.DeleteButton
            onClick={() =>
              deleteTask({
                title: task.title,
              })
            }
          >
            <Trash />
          </S.DeleteButton>
        </S.TaskContainer>
      ))}
    </S.TaskWrapper>
  )
}
