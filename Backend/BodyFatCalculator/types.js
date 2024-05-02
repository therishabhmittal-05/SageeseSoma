const zod=require("zod");

const createinfo=zod.object({
    gender:zod.object({male:zod.boolean}),
    age:zod.number(),
    height:zod.object({integer:zod.number(),decimal:zod.number()}),
    neck: zod.object({integer:zod.number(),decimal:zod.number()}),
    waist:zod.object({integer:zod.number(),decimal:zod.number()}),
})

module.exports={
    createinfo:createinfo
}