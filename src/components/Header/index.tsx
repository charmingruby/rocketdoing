import logoImg from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <S.Logo src={logoImg} alt="Rocketdoing logo" />

          <S.LogoTextContainer>
            <S.LogoText position="begin">to</S.LogoText>
            <S.LogoText position="end">do</S.LogoText>
          </S.LogoTextContainer>
        </S.LogoContainer>
      </S.Content>
    </S.Container>
  )
}
