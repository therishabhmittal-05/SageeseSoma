import React, { useState } from "react";
import axios from "axios";

const BodyFat = ({ onClear }) => {
    const [weight, setWeight] = useState('');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [selectedGender, setSelectedGender] = useState('');
    const [age, setAge] = useState('');
    const [neck, setNeck] = useState('');
    const [neckUnit, setNeckUnit] = useState('cm');
    const [neckInches, setNeckInches] = useState('');
    const [waist, setWaist] = useState('');
    const [waistUnit, setWaistUnit] = useState('cm');
    const [waistInches, setWaistInches] = useState('');
    const [bfcResult, setBfcResult] = useState(null);

    const handleClear = () => {
        setWeight('');
        setWeightUnit('kg');
        setHeightFeet('');
        setHeightInches('');
        setHeightUnit('cm');
        setSelectedGender('');
        setAge('');
        setNeck('');
        setNeckUnit('cm');
        setNeckInches('');
        setWaist('');
        setWaistUnit('cm');
        setWaistInches('');
        setBfcResult(null);
        onClear();
    };

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
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

        const data = {
            weight: weightInKg,
            height: heightInMeters,
            gender: selectedGender,
            age: parseInt(age),
            neck: parseFloat(neckUnit === 'inches' ? neckInches : neck),
            waist: parseFloat(waistUnit === 'inches' ? waistInches : waist)
        };

        if (!isNaN(weightInKg) && !isNaN(heightInMeters) && selectedGender && !isNaN(data.age) && !isNaN(data.neck) && !isNaN(data.waist)) {
            axios.post('https://sageesesoma.onrender.com/bodyFatCalc', data)
            .then((response)=>{
                console.log(response.data);
                setBfcResult(response.data.bodyFatPercentage);
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    };

    const renderResult = () => {
        return (
            <div>
                <h2>Result</h2>
                {bfcResult !== null && (
                    <p>Your BFC is: {bfcResult}%</p>
                )}
            </div>
        );
    };

    return (
        <div className="flex m-12 justify-around">
            <div className="bg-pink-700 p-8 border rounded-lg w-30vh h-auto mb-5 shadow-md">
                <h2 className="mt-1 text-2xl">Body Fat Calculator</h2>
                <div>
                    <label className="mb-1 text-white block">Gender</label>
                    <select id="gender" value={selectedGender} onChange={handleGenderChange} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="mb-1 text-white block">Age</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                </div>
                <div className="mb-4">
                    <label className="mb-1 text-white block">Weight</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)} className="w-auto p-2.5 border border-gray-300 rounded box-border mt-1 mb-2.5 mx-2.5">
                        <option value="kg">kg</option>
                        <option value="pounds">Pounds</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="mb-1 text-white block">Height</label>
                    <input type="number" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    <select value={heightUnit} className="w-auto p-2.5 border border-gray-300 rounded box-border mt-1 mb-2.5 mx-2.5" onChange={(e) => {
                        setHeightUnit(e.target.value);
                        if (e.target.value === 'cm') {
                            setHeightInches('');
                        }
                    }}>
                        <option value="cm">cm</option>
                        <option value="feet">feet</option>
                    </select>
                    {heightUnit === 'feet' && (
                        <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    )}
                </div>
                <div className="mb-4">
                    <label className="mb-1 text-white block">Neck</label>
                    <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    <select value={neckUnit} className="w-auto p-2.5 border border-gray-300 rounded box-border mt-1 mb-2.5 mx-2.5" onChange={(e) => {
                        setNeckUnit(e.target.value);
                        if (e.target.value === 'cm') {
                            setNeckInches('');
                        }
                    }}>
                        <option value="cm">cm</option>
                        <option value="inches">inches</option>
                    </select>
                    {neckUnit === 'inches' && (
                        <input type="number" value={neckInches} onChange={(e) => setNeckInches(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    )}
                </div>
                <div className="mb-4">
                    <label className="mb-1 text-white block">Waist</label>
                    <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    <select value={waistUnit} className="w-auto p-2.5 border border-gray-300 rounded box-border mt-1 mb-2.5 mx-2.5" onChange={(e) => {
                        setWaistUnit(e.target.value);
                        if (e.target.value === 'cm') {
                            setWaistInches('');
                        }
                    }}>
                        <option value="cm">cm</option>
                        <option value="inches">inches</option>
                    </select>
                    {waistUnit === 'inches' && (
                        <input type="number" value={waistInches} onChange={(e) => setWaistInches(e.target.value)} className="w-auto p-3 border border-white rounded mt-1 mb-2.5 box-border" />
                    )}
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

export default BodyFat;
