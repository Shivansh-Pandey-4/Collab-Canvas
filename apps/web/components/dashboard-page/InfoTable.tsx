import { Ellipsis } from "lucide-react"
import type { IUserInfo } from "../../app/dashboard/page"


export default function InfoTable({ userInfo }: { userInfo: IUserInfo }) {

    const roomCreated = userInfo.userInfo?.roomCreated;
    console.log("inside infotable, ", userInfo);

    return (
        <div className="w-full overflow-x-auto lg:overflow-x-visible">
            <table className="w-full min-w-2xl table-fixed md:table-auto border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300 py-2 ">Room Name</th>
                        <th className="border border-gray-300 py-2 ">Role</th>
                        <th className="border border-gray-300 py-2 ">Current Users</th>
                        <th className="border border-gray-300 py-2 ">Created</th>
                        <th className="border border-gray-300 py-2 ">Actions</th>
                    </tr>
                </thead>
                {
                    roomCreated ? <tbody>
                        {roomCreated.map((item) => (
                            <tr key={item.id} className=" text-center">
                                <td className="pl-2 py-3">{item.slug}</td>
                                <td className="pl-2 py-3">Admin</td>
                                <td className="pl-2 py-3">{item._count.member}</td>
                                <td className="pl-2 py-3">{new Date(item.createdAt).toLocaleString()}</td>
                                <td className="pl-2 py-3"><Ellipsis className="cursor-pointer hover:rounded-md hover:bg-amber-700 mx-auto" /></td>
                            </tr>
                        ))}
                    </tbody> : <div>Empty Room</div>
                }
            </table>
        </div >
    )
}

{/* <tr>
                        <td className="pl-2 py-3">Indiana</td>
                        <td className="pl-2 py-3">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="pl-2 py-3">Ohio</td>
                        <td className="pl-2 py-3">Columbus</td>
                    </tr>
                    <tr>
                        <td className="pl-2 py-3">Michigan</td>
                        <td className="pl-2 py-3">Detroit</td>
                    </tr> */}