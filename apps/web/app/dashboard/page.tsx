import SideBarClient from "../../components/dashboard-page/SideBarClient";
import MainBar from "../../components/dashboard-page/MainBar";
import { getServerSession } from "../(auth)/layout";

export default async function Dashboard() {

    const session = await getServerSession();

    console.log("session inside dashboard", session)

    return (
        <div className="flex w-full">
            <SideBarClient />
            <MainBar />
        </div>
    )
}