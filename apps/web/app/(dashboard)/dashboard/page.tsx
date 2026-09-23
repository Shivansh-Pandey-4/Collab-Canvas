import MainBar from "../../../components/dashboard-page/MainBar";
import { auth } from "@repo/auth";
import { prisma } from "@repo/db";
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
        member: ({
            room: {
                _count: {
                    creator: number;
                    member: number;
                    messages: number;
                };
            } & {
                id: number;
                createdAt: Date;
                slug: string;
                creatorId: string;
            };
        } & {
            id: number;
            userId: string;
            roomId: number;
        })[];
    } & {
        id: string;
        email: string;
        name: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null;

    pagination: {
        currentPage: number;
        totalPage: number;
        totalRooms: number;
        limit: number;
    }
})


export async function getUserData(userId: string, page = 1, limit = 5) {

    const requestHeaders = await headers();
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/room/user/${userId}?page=${page}&limit=${limit}`, {
            headers: {
                cookie: requestHeaders.get("cookie") ?? "",
            },
        });

        if (!response.ok) {
            return null;
        }

        const data: IUserInfo = await response.json();
        return data;

    } catch (error) {
        return null;
    }
}


export default async function Dashboard({ searchParams }: { searchParams: Promise<{ page?: string }> }) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    // const users = await prisma.user.findMany({});
    // console.log("just for ssr in the nextjs ", users);

    if (!session) {
        return redirect("/");
    }

    const params = await searchParams;
    let page = 1;

    if (params.page === undefined) {
        page = 1;
    }
    else {
        const parsedPage = Number(params.page);
        if (!Number.isInteger(parsedPage) || parsedPage < 1) {
            throw new Error("Page not found");
        }
        page = parsedPage;
    }

    const userInfo = await getUserData(session.user.id, page, 5);
    console.log("userinfo ", userInfo);

    if (userInfo === null) {
        throw new Error("Page not found")
    }

    return (
        <div className="h-full">
            <MainBar userInfo={userInfo} />
        </div>
    )
}