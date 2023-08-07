import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 4.5rem 0 5rem 0;
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 12px;
`

export const Logo = styled.img``

export const LogoTextContainer = styled.div``

interface LogoTextProps {
  position: 'begin' | 'end'
}

export const LogoText = styled.span<LogoTextProps>`
  font-size: 40px;
  font-weight: bold;

  color: ${(props) =>
    props.position === 'begin' ? props.theme.blue : props.theme['purple-dark']};
`
