import { auth } from "@repo/auth";
import ClientCanvas from "../../../components/drawing-page/ClientCanvas";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { IData } from "../../../types/BasicResponseMsg";

interface IRoomExistData extends IData {
    roomExist: {
        member: {
            id: number;
            userId: string;
            roomId: number;
        }[];
        message: {
            id: number;
            userId: string;
            roomId: number;
            content: string;
        }[];
        slug: string;
        id: number;
        creatorId: string;
        createdAt: Date;
    } | null;
}

type ICanvasMsg = {
    type: "canvas",
    payload: {
        msg: string;
    }
}

type IChatMsg = {
    type: "chat",
    payload: {
        msg: string;
    }
}

type IContent = ICanvasMsg | IChatMsg;


async function roomExist(roomName: string) {

    try {
        const requestHeaders = await headers();

        const response = await fetch(
            `http://localhost:3000/room/${roomName}`,
            {
                method: "GET",
                headers: {
                    cookie: requestHeaders.get("cookie") ?? "",
                },
                cache: "no-store",
            }
        );

        let data: IRoomExistData | null = null;

        try {
            data = await response.json();
        } catch (error) {
            data = null;
        }

        if (!response.ok) {
            return null;
        }

        if (data) {
            if (data.success) {
                return data;
            } else {
                return null;
            }
        }
    } catch (error) {
        return null;
    }
}


export default async function DynamicCanvas({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        return redirect("/");
    }

    const data = await roomExist(slug);
    if (!data) {
        return redirect("/");
    }


    const isJoined = data.roomExist?.member.find((item) => item.userId === session.user.id);
    if (!isJoined) {
        return redirect("/");
    }


    return (
        <div>
            <ClientCanvas userName={session.user.name} roomName={slug} useLocalStorage={false} />
        </div>
    )
}