const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.post('/bmi', (req, res)=>{
    const {weight, height} = req.body
    const bmi = weight / (height * height)
    if(bmi < 18.5){
        res.json({bmi: bmi, category: 'Underweight'})}
    else if(bmi < 24.9){
        res.json({bmi: bmi, category: 'Normal weight'})
    } 
    else if(bmi < 29.9){
        res.json({bmi: bmi, category: 'Overweight'})
    }
    else{
        res.json({bmi: bmi, category: 'Obese'})
    }   
})
app.get("/", (req, res)=>{
    res.sendStatus(200).json({
        message: "Welcome, SageeseSoma",
        usecase: "Use our Api for calculating Bmi and Bfc"
    })
})



app.listen(3000)