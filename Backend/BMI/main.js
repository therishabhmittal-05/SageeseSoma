const express = require('express')
const app = express()

app.post('/bmi', (req, res)=>{
    const {weight, height} = req.body
    const bmi = weight / (height * height)
    if(bmi < 18.5){
        res.json({bmi, category: 'Underweight'})}
    else if(bmi < 24.9){
        res.json({bmi, category: 'Normal weight'})
    } 
    else if(bmi < 29.9){
        res.json({bmi, category: 'Overweight'})
    }
    else{
        res.json({bmi, category: 'Obese'})
    }   
})



app.listen(3000)