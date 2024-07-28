import React, { useState } from 'react';

const FoodAI = () => {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    // Here you would typically call your API to get the analysis
    // For this example, we'll use the mock data you provided
    setAnalysis(mockAnalysis);
  };

  const renderSection = (title, content) => {
    if (typeof content === 'string') {
      return (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{content}</p>
        </div>
      );
    } else if (Array.isArray(content)) {
      return (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <ul className="list-disc pl-5">
            {content.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Food Analyzer</h1>
      <input 
        type="file" 
        onChange={handleImageUpload} 
        accept="image/*" 
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      {image && (
        <img 
          src={image} 
          alt="Uploaded food" 
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />
      )}
      {analysis && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{analysis.foodItem}</h2>
          {renderSection('Main Ingredients', analysis.mainIngredients)}
          {renderSection('Nutritional Content', analysis.nutritionalContent)}
          {renderSection('Potential Health Benefits', analysis.healthBenefits)}
          {renderSection('Common Allergens', analysis.allergens)}
          {renderSection('Dietary Considerations', analysis.dietaryConsiderations)}
          {renderSection('Taste and Texture', analysis.tasteAndTexture)}
          {renderSection('Cultural Origin', analysis.culturalOrigin)}
          {renderSection('Cooking Method', analysis.cookingMethod)}
        </div>
      )}
    </div>
  );
};

const mockAnalysis = {
  foodItem: 'Chickpea and Cucumber Salad',
  mainIngredients: [
    'Chickpeas', 'Cucumber', 'Tomatoes', 'Red Onion', 'Feta Cheese',
    'Parsley', 'Olive Oil', 'Lemon Juice', 'Salt and Pepper'
  ],
  nutritionalContent: `Calories: Approximately 300-400 calories (depending on serving size and dressing used)
Protein: 15-20 grams
Fat: 10-15 grams (mostly from healthy fats in olive oil and feta cheese)
Carbohydrates: 30-40 grams
Fiber: 10-15 grams
Vitamins: Vitamins A, C, K, and folate
Minerals: Calcium, iron, magnesium, potassium, and phosphorus`,
  healthBenefits: [
    'High in fiber: Promotes digestive health, regulates blood sugar, and helps with weight management.',
    'Good source of protein: Important for muscle growth and repair, satiety, and overall health.',
    'Rich in antioxidants: Helps protect against cell damage and inflammation.',
    'Low in calories and fat: Makes it a healthy and satisfying meal option.'
  ],
  allergens: ['Dairy: Feta cheese', 'Gluten: May contain traces of gluten if cross-contamination occurs during preparation'],
  dietaryConsiderations: [
    'Vegan: Substitute feta cheese with vegan alternatives (e.g., vegan feta or crumbled tofu)',
    'Gluten-Free: Ensure ingredients are gluten-free and avoid cross-contamination.',
    'Keto-Friendly: Lower carbohydrate content by reducing the amount of cucumber and red onion. Use a keto-friendly dressing.'
  ],
  tasteAndTexture: `Taste: Fresh, tangy, and slightly salty. The combination of chickpeas, cucumber, tomatoes, red onion, and feta cheese creates a flavorful and satisfying taste.
Texture: The chickpeas provide a soft and chewy texture, while the cucumber is crisp and refreshing. The tomatoes add a juicy element, and the red onion adds a bit of crunch.`,
  culturalOrigin: 'This salad is inspired by Mediterranean cuisine, particularly Greek cuisine. It is a popular dish in Greece, Cyprus, and other countries in the Mediterranean region.',
  cookingMethod: 'The salad is prepared by combining all the ingredients in a bowl and tossing them together. The dressing is typically made separately and added just before serving.'
};

export default FoodAI;