import zod from "zod";

export const roomSlugSchema = zod.object({
    slug : zod.string().trim().min(3, "minimum 3 characters required").max(100, "maximum 100 characters are allowed")
});