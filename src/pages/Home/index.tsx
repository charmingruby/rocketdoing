import { CreateTaskForm } from './components/CreateTaskForm'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

export function Home() {
  return (
    <div>
      <Header />
      <CreateTaskForm />

      <Summary />
    </div>
  )
}
