"use client";

import Button from "@repo/ui/button";
import { useRouter } from "next/navigation";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    const router = useRouter();

    return (
        <div className="flex min-h-full flex-col items-center justify-center px-6 text-center">
            <h1 className="text-5xl font-bold">Something went wrong</h1>

            <p className="mt-4 max-w-md text-neutral-500 text-2xl">
                {error.message || "An unexpected error occurred."}
            </p>

            <Button className="mt-5" variant="secondary" size="lg" onClick={() => {
                router.replace("/");
            }}>
                Back to Home
            </Button>
        </div>
    );
}