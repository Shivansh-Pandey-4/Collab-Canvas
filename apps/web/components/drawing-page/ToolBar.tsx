import { MousePointer, Circle, Square, Diamond, MoveRight, Minus, Pencil, TypeOutline, Eraser } from "lucide-react";

export default function ToolBar() {


    return (
        <div className="border rounded-md lg:px-4 py-1.5 max-w-lg fixed top-5 left-1/2 -translate-x-1/2 border-gray-300 shadow-md shadow-gray-200">

            <ul className="flex gap-x-4 lg:gap-x-5 items-center justify-center w-md lg:w-full mx-auto">
                <li className="p-2 hover:bg-gray-100 rounded-md"><MousePointer className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><Square className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><Circle className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><Diamond className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><MoveRight className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><Minus className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><Pencil className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><TypeOutline className="text-gray-700" size={14} /></li>
                <li className="p-2 hover:bg-gray-100 rounded-md"><Eraser className="text-gray-700" size={14} /></li>
            </ul>
        </div>
    )
}