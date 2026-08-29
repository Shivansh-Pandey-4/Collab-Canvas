import { Ellipsis } from "lucide-react"

export default function InfoTable() {


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
                <tbody>
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    )
}