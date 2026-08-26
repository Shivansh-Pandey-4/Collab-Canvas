
import { ToolItem } from "../context/ToolContext";
import { MousePointer, Circle, Square, Diamond, MoveRight, Minus, Pencil, TypeOutline, Eraser, LucideProps, Triangle} from "lucide-react";

interface IToolBarItem {
    id : number;
    label : ToolItem,
    icon : React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

export const ToolBarItems: IToolBarItem[] = [
    {
        id : 1,
        label : "arrow",
        icon : MousePointer,
    },
    {
        id : 2,
        label : "square",
        icon : Square
    },
    {
        id : 3,
        label : "circle",
        icon : Circle
    },
    {
        id : 4,
        label : "triangle",
        icon : Triangle
    },
    {
        id : 5,
        label : "diamond",
        icon : Diamond
    },
    {
        id : 6,
        label : "right-arrow",
        icon : MoveRight
    },
    {
        id : 7,
        label : "line",
        icon : Minus
    },
    {
        id : 8,
        label : "pencil",
        icon : Pencil
    },
    {
        id : 9,
        label : "text-type",
        icon : TypeOutline
    },
    {
        id : 10,
        label : "eraser",
        icon : Eraser
    }
]

