import type { IUserInfo } from "../../app/(dashboard)/dashboard/page"
import EllipsisHover from "./EllipsisHover";


export default function InfoTable({ userInfo }: { userInfo: IUserInfo | null }) {

    // const roomCreated = userInfo?.userInfo?.roomCreated;
    console.log("inside infotable, ", userInfo);
    const roomCreated = userInfo?.userInfo?.roomCreated ?? [];
    const members = userInfo?.userInfo?.member ?? [];

    const createdRoomIds = new Set(
        userInfo?.userInfo?.roomCreated.map((room) => room.id)
    );

    const participantRooms = members.filter(
        (member) => !createdRoomIds.has(member.roomId)
    );

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
                    roomCreated.length > 0 && <tbody>
                        {roomCreated.map((item) => (
                            <tr key={item.id} className=" text-center">
                                <td className="pl-2 py-3">{item.slug}</td>
                                <td className="pl-2 py-3"><span className="border px-3 py-1 rounded-lg bg-indigo-500 border-black">Admin </span></td>
                                <td className="pl-2 py-3">{item._count.member}</td>
                                <td className="pl-2 py-3">{new Date(item.createdAt).toLocaleString()}</td>
                                <td className="pl-2 py-3">
                                    <EllipsisHover admin={true} roomCreatedName={item.slug} />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                }
                {
                    participantRooms.length > 0 && <tbody>
                        {participantRooms.map((item) => (
                            <tr key={item.id} className=" text-center">
                                <td className="pl-2 py-3">{item.room.slug}</td>
                                <td className="pl-2 py-3"><span className="border px-3 py-1 rounded-lg bg-orange-200 text-black">Participant</span></td>
                                <td className="pl-2 py-3">{item.room._count.member}</td>
                                <td className="pl-2 py-3">{new Date(item.room.createdAt).toLocaleString()}</td>
                                <td className="pl-2 py-3">
                                    <EllipsisHover admin={false} roomCreatedName={item.room.slug} />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                }
            </table>
        </div >
    )
}
