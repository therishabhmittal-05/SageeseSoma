const express = require("express");
// const { createinfo } = require("./types");
const app = express();
app.use(express.json());
function bodyFatCalc(gender, age, height, neck, waist){
    if (gender == "male"){
        return 495 / (1.0324 - 0.19077 * (Math.log(waist - neck) / Math.LN10) + 0.15456 * (Math.log(height) / Math.LN10))- 450
    }
    else {
       return 495 / (1.29579 - 0.35004 * (Math.log(waist + hip - neck) / Math.LN10) + 0.22100 * (Math.log(height) / Math.LN10))-450;

    }
}
app.post("/bodyFatCalc", async function(req, res){
    const {gender, age, height, neck, waist}= req.body;
    // const parseddetail = createinfo.safeParse(createdetail);

    // if (!parseddetail.success) {
    //     res.status(411).json({
    //         msg: "You sent the wrong inputs",
    //     })
    //     return;
    // }
    
    // await info.create({

    //         gender:createdetail.gender.male,
    //         age:createdetail.age,
    //         height:createdetail.height,
    //         neck:createdetail.neck ,
    //         waist:createdetail.waist
    //     })
        const result = bodyFatCalc(gender, age, height, neck, waist)
    res.json({
         result
    })
})




app.listen(4000)

