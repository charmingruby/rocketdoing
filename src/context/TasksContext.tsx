import { ReactNode, createContext, useState } from 'react'

export interface Task {
  title: string
  isComplete: boolean
}

interface createTaskInputs {
  title: string
}

interface deleteTaskInputs {
  title: string
}

interface changeTaskStatusInputs {
  title: string
}

interface TaskContextType {
  tasks: Task[]
  createTask: (data: createTaskInputs) => void
  deleteTask: (data: deleteTaskInputs) => void
  changeTaskStatus: (data: changeTaskStatusInputs) => void
}

interface TaskContextProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export function TasksProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function createTask({ title }: createTaskInputs) {
    const newTask: Task = { title, isComplete: false }

    setTasks((state) => [newTask, ...state])
  }

  function deleteTask({ title }: deleteTaskInputs) {
    setTasks((state) => state.filter((item) => item.title !== title))
  }

  function changeTaskStatus({ title }: changeTaskStatusInputs) {
    const taskToUpdate = tasks.find((task) => task.title === title)

    if (!taskToUpdate) {
      return
    }

    const updatedTask: Task = {
      title: taskToUpdate.title,
      isComplete: !taskToUpdate.isComplete,
    }

    setTasks((state) => {
      const updatedTaskList = state.filter((task) => task.title !== title)

      return [updatedTask, ...updatedTaskList]
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        changeTaskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
