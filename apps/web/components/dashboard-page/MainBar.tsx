import FilterClient from "./FilterClient";
import JoinRoomClient from "./JoinRoomClient";


export default function MainBar() {
    return (
        <div className="w-full bg-neutral-900 px-5">
            <div className="flex items-center justify-between border-b border-gray-300 py-5">
                <h1>Dashboard</h1>
                <JoinRoomClient />
            </div>
            <div className="py-8 mt-2 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Your Rooms</h1>
                <FilterClient />
            </div>
        </div>
    )
}