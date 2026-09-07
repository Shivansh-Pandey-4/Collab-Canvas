import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function getServerSession() {
    const h = await headers();

    const response = await fetch(
        `${process.env.BETTER_AUTH_URL}/api/auth/get-session`,
        {
            headers: {
                cookie: h.get("cookie") ?? "",
            },
            cache: "no-store",
        }
    );

    const data = await response.json();
    return data;
}

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    const session = await getServerSession();
    console.log("session: ", session);

    if (session) {
        return redirect("/dashboard");
    }

    return (
        <>
            {children}
        </>
    )

}