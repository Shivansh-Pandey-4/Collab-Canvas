import SideBarClient from "../../components/dashboard-page/SideBarClient";
import MainBar from "../../components/dashboard-page/MainBar";
import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return redirect("/");
    }

    console.log("session inside dashboard", session)

    return (
        <div className="flex w-full">
            <SideBarClient session={session} />
            <MainBar />
        </div>
    )
}