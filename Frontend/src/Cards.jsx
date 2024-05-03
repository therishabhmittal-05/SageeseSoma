import React, { useState } from "react";


const Cards = ({ onClear }) => {
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [bmiResult, setBmiResult] = useState(null);

    const handleClear = () => {
        setWeight('');
        setWeightUnit('kg');
        setHeightFeet('');
        setHeightInches('');
        setHeightUnit('cm');
        setBmiResult(null);
        onClear();
    };

    const handleCalculate = () => {
        let weightInKg;

        if (weightUnit === 'pounds') {
            weightInKg = parseFloat(weight) * 0.453592;
        } else {
            weightInKg = parseFloat(weight);
        }

        let heightInMeters;

        if (heightUnit === 'cm') {
            heightInMeters = parseFloat(heightFeet) * 0.01;
        } else if (heightUnit === 'feet') {
            heightInMeters = (parseFloat(heightFeet) * 0.3048) + (parseFloat(heightInches) * 0.0254);
        }

        if (!isNaN(weightInKg) && !isNaNgit (heightInMeters)) {
            const bmi = weightInKg / Math.pow(heightInMeters, 2);
            setBmiResult(bmi.toFixed(2));
        }
    };

    const renderResult = () => {
        const getBackgroundColor = () => {
            if (bmiResult >= 30) {
                return 'blue';
            } else if (bmiResult >= 25) {
                return '#FF0000';
            } else if (bmiResult >= 18.5) {
                return '';
            }
            return '';
        };

        return (
            <div>
                <h2>Result</h2>
                {bmiResult !== null && (
                    <p>Your BMI is: <span style={{ backgroundColor: getBackgroundColor() }}>{bmiResult}</span></p>
                )}
                <h3>BMI categories</h3>
                <table className="w-full mt-5 border-collapse">
                    <thead>
                        <tr>
                            <th className="bg-sky-500 border border-white p-2 text-white h-8 text-left">BMI</th>
                            <th className="bg-sky-500 border border-white p-2 text-white h-8 text-left">Weight Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: bmiResult < 18.5 ? '' : '' }} className="border border-white p-2 text-white h-8 text-left"> Less than 18.5</td>
                            <td className="border border-white p-2 text-white h-8 text-left">UnderWeight</td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: bmiResult >= 18.5 && bmiResult <= 24.9 ? '' : '' }}>18.5 - 24.9</td>
                            <td>Normal Weight</td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: bmiResult >= 25 && bmiResult <= 29.9 ? '#FF0000' : '' }}>25 - 29.9</td>
                            <td>OverWeight</td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: bmiResult >= 30 ? 'blue' : '' }}>30 - 34.9</td>
                            <td>Obesity(class I)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
         
            
        );
    };

    return (
        <div className="flex m-12 justify-around">
            <div className="bg-pink-700 p-8 border rounded-lg w-30vh h-auto mb-5 shadow-md">
                <h2 className="mt-1">BMI Calculator</h2>
                <div className="mb-4">
                    <label className="mb-1 text-white block">Weight: </label>
                    <input type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)} className="w-auto p-2.5 border border-gray-300 rounded box-border mt-1 mb-2.5 mx-2.5">
                        <option value="kg">kg</option>
                        <option value="pounds">pounds</option>
                    </select>
                </div>
                <div className="input-container">
                    <label >Height:</label>
                    <input type="number"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(e.target.value)} />
                    <select value={heightUnit} onChange={(e) => {
                        setHeightUnit(e.target.value);
                        if (e.target.value === 'cm') {
                            setHeightInches('');
                        }
                    }}>
                        <option value="cm">cm</option>
                        <option value="feet">feet</option>
                    </select>
                </div>
                <div className="input-container">
                    <label>Height(inches):</label>
                    <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)}
                        disabled={heightUnit === 'cm'} />
                </div>
                <button className="bg-sky-500 text-white p-2.5 border rounded cursor-pointer hover:bg-sky-700" onClick={handleClear}>Clear</button> &nbsp;
                <button className="bg-sky-500 text-white p-2.5 border rounded cursor-pointer hover:bg-sky-700" onClick={handleCalculate}>Calculate</button>
            </div>
            <div className="card2">
                {renderResult()}
            </div>
        </div>
    );
};

export default Cards;
