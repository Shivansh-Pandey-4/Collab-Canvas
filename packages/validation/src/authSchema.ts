import zod from "zod";


export const signupSchema = zod.object({
    name : zod.string().trim().min(3, "minimum 3 characters are required").max(255),
    email: zod.preprocess(val => typeof val === "string" ? val.trim() : val, zod.email()),
    password: zod.string().trim().min(8, "minimum 8 characters are required").max(128, "maximum 128 characters are allowed only")
})


export const signinSchema = signupSchema.pick({email: true, password: true});