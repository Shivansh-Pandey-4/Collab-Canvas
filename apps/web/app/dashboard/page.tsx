import SideBarClient from "../../components/dashboard-page/SideBarClient";
import MainBar from "../../components/dashboard-page/MainBar";

export default function Dashboard() {

    return (
        <div className="flex flex-col md:flex-row md:gap-x-1">
            <SideBarClient />
            <MainBar />
        </div>
    )
}