import zod from "zod";

const arrowSchema = zod.object({
    shape: zod.literal("arrow"),
    x: zod.number(),
    y: zod.number(),
    w: zod.number(),
    h: zod.number(),
});

const squareSchema = zod.object({
    shape: zod.literal("square"),
    x: zod.number(),
    y: zod.number(),
    w: zod.number(),
    h: zod.number(),
});

const circleSchema = zod.object({
    shape: zod.literal("circle"),
    x: zod.number(),
    y: zod.number(),
    w: zod.number(),
    h: zod.number(),
    rotationAngle: zod.number(),
    startAngle: zod.number(),
    endAngle: zod.number(),
});

const triangleSchema = zod.object({
    shape: zod.literal("triangle"),
    x: zod.number(),
    y: zod.number(),
    w: zod.number(),
    h: zod.number(),
});

const diamondSchema = zod.object({
    shape: zod.literal("diamond"),
    x: zod.number(),
    y: zod.number(),
    w: zod.number(),
    h: zod.number(),
});

const lineSchema = zod.object({
    shape: zod.literal("line"),
    x: zod.number(),
    y: zod.number(),
    w: zod.number(),
    h: zod.number(),
});

const pencilSchema = zod.object({
    shape: zod.literal("pencil"),

    points: zod.array(
        zod.object({
            x: zod.number(),
            y: zod.number(),
        })
    ),
});


const rightArrowSchema = zod.object({
    shape: zod.literal("right-arrow"),
    x: zod.number(),
    y: zod.number(),
    w: zod.number(),
    h: zod.number(),
});


export const drawShapeSchema = zod.discriminatedUnion("shape", [
    arrowSchema,
    squareSchema,
    circleSchema,
    diamondSchema,
    triangleSchema,
    lineSchema,
    pencilSchema,
    rightArrowSchema,
]);