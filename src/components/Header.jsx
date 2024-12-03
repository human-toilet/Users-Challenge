import { useId } from "react"
import { useSearch } from "../hooks/useSearch"

export function Header(){
  const headerFormId = useId()
  const { handleChangeUser } = useSearch()

  return (
    <header className="flex flex-col items-center justify-center gap-[4px] h-[120px]">
      <h1 className="text-white text-[30px] font-bold">Users Challenge</h1>
      <form className="flex gap-[4px] justify-center w-full">
        <label
          className="text-white text-[20] font-bold"
          htmlFor={headerFormId}
        >
          Search users:
        </label>
        <input 
          className="pl-[5px]"
          id={headerFormId}
          placeholder="username"
          onChange={handleChangeUser}
        />
      </form>
    </header>
  )
}