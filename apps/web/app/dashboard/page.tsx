import SideBarClient from "../../components/dashboard-page/SideBarClient";
import MainBar from "../../components/dashboard-page/MainBar";

export default function Dashboard() {

    return (
        <div className="flex w-full">
            <SideBarClient />
            <MainBar />
        </div>
    )
}