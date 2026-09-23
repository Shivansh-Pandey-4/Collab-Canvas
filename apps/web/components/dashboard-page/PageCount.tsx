"use client"

import Button from "@repo/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IUserInfo } from "../../app/(dashboard)/dashboard/page";
import { useRouter } from "next/navigation";



export default function PageCount({ userInfo }: { userInfo: IUserInfo | null }) {

    const router = useRouter();

    const pagination = userInfo?.pagination;

    if (!pagination) {
        return null;
    }

    function nextPage() {
        if (pagination && pagination.currentPage < pagination.totalPage) {
            router.push(
                `/dashboard?page=${pagination.currentPage + 1}`
            );
        }
    }

    function previousPage() {
        if (pagination && pagination.currentPage > 1) {
            router.push(
                `/dashboard?page=${pagination.currentPage - 1}`
            );
        }
    }


    return (
        <div className="flex justify-between items-center">
            <p>Page {pagination.currentPage} of {pagination?.totalPage}</p>
            <div className="space-x-5 flex items-center">

                <Button
                    onClick={previousPage}
                    disabled={pagination.currentPage <= 1}

                    size="md"> <span className="gap-x-1 flex items-center"><ChevronLeft size={15} /> Prev</span></Button>

                <Button
                    onClick={nextPage}
                    disabled={
                        pagination.currentPage >= pagination.totalPage
                    }
                    size="md"> <span className="gap-x-1 flex items-center">Next <ChevronRight size={15} /></span></Button>
            </div>
        </div>
    )
}