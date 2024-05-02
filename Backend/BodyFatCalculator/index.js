const express = require("express");
const { createinfo } = require("./types");
const app = express();
app.use(express.json());
function bodyFatCalc(createdetail){ 
    // for men
    if (createdetail.gender){
        return 495 / (1.0324 - 0.19077 * (Math.log(createdetail.waist - createdetail.neck) / Math.LN10) + 0.15456 * (Math.log(createdetail.height) / Math.LN10))- 450
    }
    //for women
    else {
       return 495 / (1.29579 - 0.35004 * (Math.log(createdetail.waist - createdetail.neck) / Math.LN10) + 0.22100 * (Math.log(createdetail.height) / Math.LN10))-450;

    }
}
app.post("/bodyFatCalc", async function(req, res){
    const createdetail= req.body;
 const parseddetail = createinfo.safeParse(createdetail);

     if (!parseddetail.success) {
         res.status(411).json({
             msg: "You sent the wrong inputs",
         })
         return;
    }
    
        const result = bodyFatCalc(createdetail);
    res.json({
         result
    })
})




app.listen(4000)

