import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Profile() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return redirect("/");
    }

    return (
        <div>
            <h1> Profile Page</h1>
        </div>
    )
}