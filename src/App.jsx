import { Header } from "./components/Header"
import { Users } from "./components/Users"
import { UsersProvider } from "./context/users"

export function App() {
  return (
    <UsersProvider>
      <Header/>
      <main>
        <Users/>
      </main>
    </UsersProvider> 
  )
}

