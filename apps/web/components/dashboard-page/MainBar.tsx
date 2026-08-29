import FilterClient from "./FilterClient";
import InfoTable from "./InfoTable";
import JoinRoomClient from "./JoinRoomClient";
import PageCount from "./PageCount";



export default function MainBar() {
    return (
        <div className="flex-1 min-w-0 bg-neutral-900 px-5">
            <div className="flex items-center justify-between border-b border-gray-300 py-5">
                <h1>Dashboard</h1>
                <JoinRoomClient />
            </div>
            <div className="py-8 mt-2 flex flex-col items-center gap-y-1 md:flex-row md:justify-between md:items-center">
                <h1 className="text-2xl md:text-xl font-semibold ">Your Rooms</h1>
                <FilterClient />
            </div>
            <div className="mt-3 ">
                <InfoTable />
            </div>
            <div className="mt-3 py-3">
                <PageCount />
            </div>
        </div>
    )
}