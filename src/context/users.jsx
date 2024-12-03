import { useEffect, useRef } from "react"
import { useState } from "react"
import { createContext } from "react"

export const UsersContext = createContext()

export function UsersProvider({ children }){
  const [originalUsers, setOriginalUsers] = useState([])
  const [users, setUsers] = useState([])
  const [altMessage, setAltMessage] = useState('Loading...')
  const USERS_URL = ' https://jsonplaceholder.typicode.com/users'
  
  useEffect(() => {
    fetch(USERS_URL)
      .then((data) => data.json())
      .then((response) => {
        setUsers(response)
        setOriginalUsers(response)
      })
    }, [])

  const value = {
    originalUsers,
    users,
    setUsers,
    altMessage, 
    setAltMessage
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}