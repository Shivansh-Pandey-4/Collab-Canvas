"use client"

import Button from "@repo/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IUserInfo } from "../../app/(dashboard)/dashboard/page";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";



export default function PageCount({ userInfo }: { userInfo: IUserInfo | null }) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const pagination = userInfo?.pagination;

    if (!pagination) {
        return null;
    }

    function navigateToPage(page: number) {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", String(page));

        startTransition(() => {
            router.push(`/dashboard?${params.toString()}`);
        });
    }

    function nextPage() {
        if (pagination && pagination.currentPage < pagination.totalPage) {
            navigateToPage(pagination.currentPage + 1);
        }
    }

    function previousPage() {
        if (pagination && pagination.currentPage > 1) {
            navigateToPage(pagination.currentPage - 1);
        }
    }


    return (
        <div className="flex justify-between items-center">
            <p>Page {pagination.currentPage} of {pagination?.totalPage}</p>
            <div className="space-x-5 flex items-center">

                <Button
                    onClick={previousPage}
                    disabled={isPending || pagination.currentPage <= 1}
                    size="md"
                >
                    <span className="gap-x-1 flex items-center">
                        <ChevronLeft size={15} />
                        {isPending ? "Loading.." : "Prev"}
                    </span>
                </Button>

                <Button
                    onClick={nextPage}
                    disabled={
                        isPending ||
                        pagination.currentPage >= pagination.totalPage
                    }
                    size="md"
                >
                    <span className="gap-x-1 flex items-center">
                        {isPending ? "Loading.." : "Next"}
                        <ChevronRight size={15} />
                    </span>
                </Button>
            </div>
        </div>
    )
}