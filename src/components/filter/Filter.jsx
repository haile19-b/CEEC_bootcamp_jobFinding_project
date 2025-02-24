import { useState } from "react";
import './Filter.css'

const FilterComponent = ({manualInput,setManualInput}) => {
const [salaryRange, setSalaryRange] = useState([20, 2000]);
const reset = ()=>{
  setManualInput({ from: 0, to: Infinity })
}

  return (
    <div className='filter w-[361px] h-[613px] rounded-[20px] bg-white z-990'>
      <h2 className="text-xl font-bold text-center mb-4">Filter</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Date Posted</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Last 24 Hours</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Job Type</label>
        <div className="space-y-2">
          {["Full-time", "Part-time", "Internship", "Contract", "Volunteer"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked id={type} className="w-4 h-4" />
              <label htmlFor={type} className="text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Location</label>
        <div className="relative">
          <input type="text" placeholder="Enter your location" className="w-full p-2 pl-8 border rounded-lg" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Experience Level</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Entry</option>
          <option>Intermediate</option>
          <option>Senior</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Salary Range</label>
        <div className="flex gap-0 justify-center">
        <input type="range" min="20" max="2000" value={salaryRange[0]} className="w-[40%] m-0 rotate-180" onChange={(e) => setSalaryRange([Number(e.target.value), salaryRange[1]])} />
        <input type="range" min="20" max="2000" value={salaryRange[1]} className="w-[40] m-0 relative right-[5px]" onChange={(e) => setSalaryRange([salaryRange[0], Number(e.target.value)])} />
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>${salaryRange[0]}</span>
          <span>${salaryRange[1]}</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Input Manually</label>
        <div className="flex space-x-2">
          <input type="number" placeholder="From" value={manualInput.from} onChange={(e) => setManualInput({ ...manualInput, from: e.target.value })} className="w-full p-2 border rounded-lg" />
          <input type="number" placeholder="To" value={manualInput.to} onChange={(e) => setManualInput({ ...manualInput, to: e.target.value })} className="w-full p-2 border rounded-lg" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Currency</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Dollar ($)</option>
          <option>Euro (€)</option>
          <option>Pound (£)</option>
        </select>
      </div>

      <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700" onClick={reset}>Reset all filter</button>
    </div>
  );
};

export default FilterComponent;
