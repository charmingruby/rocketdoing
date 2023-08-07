import styled from 'styled-components'

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
interface TaskContainerProps {
  status: 'checked' | 'unchecked'
}

export const TaskContainer = styled.div<TaskContainerProps>`
  background-color: ${(props) => props.theme['gray-500']};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  align-items: start;
  gap: 0.75rem;

  input {
    display: none;
  }

  p {
    font-size: 0.875rem;
    line-height: 140%;
    flex: 1;

    color: ${(props) =>
      props.status === 'unchecked'
        ? props.theme['gray-100']
        : props.theme['gray-300']};
    text-decoration: ${(props) => props.status === 'checked' && 'line-through'};
  }
`

export const Checkbox = styled.label`
  width: 17.45px;
  height: 17.45px;
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 9999px;
  cursor: pointer;
`

export const CheckedCheckbox = styled.label`
  width: 17.45px;
  height: 17.45px;
  border-radius: 9999px;
  background-color: ${(props) => props.theme['purple-dark']};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  color: ${(props) => props.theme['gray-300']};
  padding: 0.25rem;
  border-radius: 0.5rem;
  background-color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.danger};
    }
  }
`
