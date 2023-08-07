import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { TasksProvider } from './context/TasksContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TasksProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TasksProvider>
    </ThemeProvider>
  )
}

export default App
