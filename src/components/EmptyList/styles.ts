import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 0.5rem;
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  padding: 4rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 140%;
  color: ${(props) => props.theme['gray-300']};

  strong {
    font-size: 1rem;
    font-weight: 700;
  }
`
