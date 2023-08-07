import Clipboard from '../../assets/icons/Clipboard.svg'
import * as S from './styles'

export function EmptyList() {
  return (
    <S.Container>
      <img src={Clipboard} alt="Clipboard" />

      <S.Content>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </S.Content>
    </S.Container>
  )
}
