import { useUser } from "../hooks/useUser"

export function AltMessage(){
  const { altMessage } = useUser()

  return (
    <span className={`text-[17px] font-bold block text-center ${altMessage === 'No result found' ? 'text-red-700' : 'text-green-700'}`}>{altMessage}</span>
  )
}