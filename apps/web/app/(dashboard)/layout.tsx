import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SideBarClient from "../../components/dashboard-page/SideBarClient";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return redirect("/signup");
    }

    return (
        <div className="flex w-full min-h-screen">
            <SideBarClient session={session} />
            <main className="flex-1">
                {children}
            </main>
        </div>
    )

}