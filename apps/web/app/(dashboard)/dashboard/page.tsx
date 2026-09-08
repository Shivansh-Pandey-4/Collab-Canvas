import MainBar from "../../../components/dashboard-page/MainBar";
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
    userInfo: ({
        roomCreated: ({
            _count: {
                member: number;
            };
        } & {
            id: number;
            createdAt: Date;
            slug: string;
            creatorId: string;
        })[];
        member: {
            id: number;
            userId: string;
            roomId: number;
        }[];
    } & {
        id: string;
        email: string;
        name: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null
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

    const userInfo = await getUserData(session.user.id);
    console.log("userinfo ", userInfo);

    return (
        <div className="h-full">
            <MainBar userInfo={userInfo} />
        </div>
    )
}