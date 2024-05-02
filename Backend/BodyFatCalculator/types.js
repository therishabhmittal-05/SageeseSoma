const zod=require("zod");

const createinfo=zod.object({
    gender:zod.boolean(),
    age:zod.number(),
    height:zod.number(),
    neck: zod.number(), 
    waist:zod.number()
})

module.exports={
    createinfo:createinfo
}