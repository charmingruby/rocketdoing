import { PlusCircle } from 'phosphor-react'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TaskContext } from '../../../../context/TasksContext'

const createTaskFormValidationSchema = z.object({
  title: z.string().min(6, {
    message: 'A tarefa precisa ter no mínimo 6 caracteres.',
  }),
})

type createTaskFormInputs = z.infer<typeof createTaskFormValidationSchema>

export function CreateTaskForm() {
  const { createTask } = useContext(TaskContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<createTaskFormInputs>({
    resolver: zodResolver(createTaskFormValidationSchema),
  })

  function handleCreateTask(data: createTaskFormInputs) {
    console.log(data)
    createTask({ title: data.title })
  }

  return (
    <S.Container>
      <S.CreateTaskFormContainer onSubmit={handleSubmit(handleCreateTask)}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          {...register('title')}
        />

        <button type="submit" disabled={isSubmitting}>
          <span>Criar</span>
          <PlusCircle size={20} />
        </button>
      </S.CreateTaskFormContainer>

      {errors.title?.message && (
        <S.FormError>{errors.title.message}</S.FormError>
      )}
    </S.Container>
  )
}
