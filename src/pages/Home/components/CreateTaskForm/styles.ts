import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -1.6875rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    width: 100%;
  }
`

export const CreateTaskFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-500']};
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    transition: 0.25s border-color;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }

    &:focus {
      border-color: ${(props) => props.theme['purple-dark']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;
    background-color: ${(props) => props.theme['blue-dark']};
    border-radius: 0.5rem;
    color: ${(props) => props.theme['gray-100']};

    cursor: pointer;
    transition: 0.25s background-color;

    span {
      font-weight: 700;
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      span {
        display: none;
      }
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.blue};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`
export const FormError = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.danger};
  font-size: 0.875rem;
`
