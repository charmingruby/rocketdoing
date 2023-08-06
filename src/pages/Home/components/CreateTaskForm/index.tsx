import { PlusCircle } from 'phosphor-react'
import * as S from './styles'
import { useForm } from 'react-hook-form'

export function CreateTaskForm() {
  const {} = useForm()

  return (
    <S.CreateTaskFormContainer>
      <input placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </S.CreateTaskFormContainer>
  )
}
