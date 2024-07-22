import React from "react";

const Gender = ({ handleCheckbox, selectedGenders }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGenders==="male"?"selected":""}`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" checked={selectedGenders==="male"}
          onChange={()=>handleCheckbox("male")}/>
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGenders==="female"?"selected":""}`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" 
          checked={selectedGenders==="female"}
          onChange={()=>handleCheckbox("female")}/>
        </label>
      </div>
    </div>
  );
};

export default Gender;
