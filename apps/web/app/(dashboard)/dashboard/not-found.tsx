"use client";

import Button from "@repo/ui/button";
import { useRouter } from "next/navigation";

export default function DashboardNotFound() {
    const router = useRouter();

    return (
        <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-xl lg:text-5xl font-bold">
                Page not found
            </h1>

            <p className="mt-4 px-4 text-neutral-500">
                The requested dashboard page does not exist.
            </p>

            <div className="mt-6 flex gap-3">
                <Button
                    size="md"
                    onClick={() => {
                        window.location.href = "/dashboard";
                    }}
                >
                    Go to Dashboard
                </Button>

                <Button
                    size="md"
                    variant="secondary"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Go to Home
                </Button>
            </div>
        </div>
    );
}