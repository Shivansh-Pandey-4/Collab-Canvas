import type { IUserInfo } from "../../app/(dashboard)/dashboard/page"
import EllipsisHover from "./EllipsisHover";


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
                                <td className="pl-2 py-3">
                                    <EllipsisHover />
                                </td>
                            </tr>
                        ))}
                    </tbody> : <div>Empty Room</div>
                }
            </table>
        </div >
    )
}
