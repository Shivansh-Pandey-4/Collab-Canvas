import SideBarClient from "../../components/dashboard-page/SideBarClient";
import MainBar from "../../components/dashboard-page/MainBar";
import { auth } from "@repo/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type IUser = {
    createdAt: Date;
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    updatedAt: Date;
}

export type IUserInfo = ({
    userInfo: {

        member: {
            id: number;
            userId: string;
            roomId: number;
        }[];
        roomCreated: {
            slug: string;
            createdAt: Date;
            id: number;
            creatorId: string;
        }[];
    } & IUser | null
})


async function getUserData(userId: string) {

    const requestHeaders = await headers();
    try {
        const response = await fetch(`http://localhost:3000/room/user/${userId}`, {
            headers: {
                cookie: requestHeaders.get("cookie") ?? "",
            },
        });

        const data = await response.json();
        return data;

    } catch (error) {
        return null;
    }
}


export default async function Dashboard() {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return redirect("/");
    }

    console.log("session inside dashboard", session)

    console.log(session.user.id)
    const userInfo = await getUserData(session.user.id);
    console.log("userinfo ", userInfo);

    return (
        <div className="flex w-full">
            <SideBarClient session={session} />
            <MainBar userInfo={userInfo} />
        </div>
    )
}