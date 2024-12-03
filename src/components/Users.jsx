import { useUser } from "../hooks/useUser"
import { AltMessage } from "./AltMessage"

export function Users(){
  const { users } = useUser()

  return users.length != 0 ? ( 
      <table className="text-white w-full border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="text-start py-[10px] text-[18px] pl-[5px] border border-solid border-gray-100">Name</th>
            <th className="text-start py-[10px] text-[18px] pl-[5px] border border-solid border-gray-100">Username</th>
            <th className="text-start py-[10px] text-[18px] pl-[5px] border border-solid border-gray-100">Phone Number</th>
            <th className="text-start py-[10px] text-[18px] pl-[5px] border border-solid border-gray-100">Email</th>
          </tr>
        </thead>
        <tbody> 
          {users.map(({ name, username, phone, email, id }) => (
            <tr key={id}>
              <td className="border border-solid border-gray-100 py-[8px] pl-[5px] font-bold">{name}</td>
              <td className="border border-solid border-gray-100 py-[8px] pl-[5px]">{username}</td>
              <td className="border border-solid border-gray-100 py-[8px] pl-[5px]">{phone}</td>
              <td className="text-blue-500  border border-solid border-gray-100 py-[8px] pl-[5px]">{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
    : (
      <AltMessage/>
    )

return 
}

