import dotenv from "dotenv"
dotenv.config()
import * as fs from "fs"

import {GoogleGenerativeAI} from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

function filePath(path, mimeType){
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType: mimeType,
        }
    };
}


async function apiRun (){
    const model = genAI.getGenerativeModel({model : "gemini-1.5-flash"});

    const prompt = `Analyze the provided food image and give a detailed response including:
      Identification of the food item(s), List of main ingredients, Nutritional content breakdown,
      Estimated calorie count per serving, Potential health benefits, Any common allergens present,
      Suggestions for dietary considerations (e.g., vegan, gluten-free, keto-friendly),
      Brief description of taste and texture, Cultural origin or significance, if applicable,
      Cooking method used (if identifiable).
      Present the information in a JSON format with the following structure:
      {
        "foodItem": "",
        "mainIngredients": [],
        "nutritionalContent": "",
        "healthBenefits": [],
        "allergens": [],
        "dietaryConsiderations": [],
        "tasteAndTexture": "",
        "culturalOrigin": "",
        "cookingMethod": ""
      }`;

    const imagePart = [
        filePath("burger.jpg", "image/jpeg"),
    ]

   try { 
    const ans = await model.generateContent([prompt, imagePart])
    const res = ans.response
    const textAns = res.text()
    console.log(textAns)
    } catch(error){
        console.log(error)
    }
}


apiRun()