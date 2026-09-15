import { allSockets } from "../index.js";

export function onlineUserBroadCast(slug: string) {
    const sockets_in_room = allSockets.get(slug);
    if (!sockets_in_room) {
        return;
    }

    const onlineUserCount = sockets_in_room.size;

    return allSockets.get(slug)?.forEach(s => (
        s.send(JSON.stringify({
            type: "online_user_count",
            payload: {
                count: onlineUserCount
            }
        }))
    ))
}