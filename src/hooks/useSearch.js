import { useRef } from "react"
import { useUser } from "./useUser"

export function useSearch(){
  const { originalUsers, setUsers, setAltMessage } = useUser()

  const handleChangeUser = (e) => {
    setUsers(originalUsers.filter(({ name }) => name.toLowerCase().includes(e.target.value.trim())))
    setAltMessage('No result found')
  }

  return { handleChangeUser }
}