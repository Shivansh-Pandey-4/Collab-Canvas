type IArrow = {
    shape: "arrow",
    x: number;
    y: number;
    w: number;
    h: number;
}

type ISquare = {
    shape: "square",
    x: number;
    y: number;
    w: number;
    h: number;
}
// "arrow" | "circle" | "square" | "diamond" | "right-arrow" | "line" | "pencil" | "text-type" | "eraser"

type ICircle = {
    shape : "circle",
    x : number;
    y : number;
    w : number;
    h : number;
    rotationAngle : number,
    startAngle : number,
    endAngle : number
}

type ITriangle = {
    shape : "triangle",
    x : number;
    y : number;
    w : number;
    h : number;
}

type IDiamond = {
    shape : "diamond",
    x : number;
    y : number;
}

type ILine = {
    shape : "line",
    x : number;
    y : number;
    w : number;
    h : number;
}

export type IDrawShapes = IArrow | ISquare | ICircle | IDiamond | ITriangle | ILine;