const zod=require("zod");

const createinfo=zod.object({
    gender:zod.object({male:zod.boolean}),
    age:zod.number(),
    height:zod.object({integer:zod.number(),decimal:zod.decimal()}),
    neck: zod.object({integer:zod.number(),decimal:zod.decimal()}),
    waist:zod.object({integer:zod.number(),decimal:zod.decimal()}),
})

module.exports={
    createinfo:createinfo
}