import { useContext } from "react"
import { UsersContext } from "../context/users"

export function useUser(){
  const context = useContext(UsersContext)
  return context
}