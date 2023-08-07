import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

interface TitleProps {
  type: 'created' | 'done'
}

export const Title = styled.span<TitleProps>`
  font-weight: 700;
  color: ${(props) =>
    props.type === 'created' ? props.theme.blue : props.theme.purple};
`
export const Metrics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['gray-200']};
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 999px;
`
