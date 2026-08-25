"use client"

import Button from "@repo/ui/button";
import clsx from "clsx";
import useToolBar from "../../hooks/useToolBar";
import { ToolBarItems } from "../../utils/ToolBarItems";


export default function ToolBar() {

    const myToolBar = useToolBar();



    return (
        <div className="border rounded-md lg:px-4 py-1.5 max-w-lg fixed top-5 left-1/2 -translate-x-1/2 border-gray-300 shadow-md shadow-gray-200">

            <ul className="flex gap-x-4 lg:gap-x-5 items-center justify-center w-md lg:w-full mx-auto">

                {
                    ToolBarItems.map(item => {
                        const Icon = item.icon;

                        return (
                            <Button onClick={(event) => myToolBar.setSelectedItem(item.label)} value={item.label} key={item.id} variant="toolBar" className={clsx('p-2', myToolBar.selectedItem === item.label && "bg-gray-200 hover:bg-gray-200")}>
                                <Icon className="text-gray-700" size={14} />
                            </Button>
                        )
                    })
                }

            </ul>
        </div>
    )
}