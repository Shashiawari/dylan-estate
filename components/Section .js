"use client"
import React, { useState } from "react";

const CheckboxSection = () => {
  const [ownerChecked, setOwnerChecked] = useState(false);
  const [builderChecked, setBuilderChecked] = useState(false);

  const handleOwnerChange = () => {
    setOwnerChecked(!ownerChecked);
    if (!ownerChecked) {
      setBuilderChecked(false);
    }
  };

  const handleBuilderChange = () => {
    setBuilderChecked(!builderChecked);
    if (!builderChecked) {
      setOwnerChecked(false);
    }
  };

  return (
    <label style={{ color: "black", fontSize: "20px" }}>
      I am<span style={{ color: "red" }}>*</span> :
      <div className="d-flex mt-4" style={{ gap: "100px" }}>
        <label className="container1">
          Owner
          <input
            type="checkbox"
            checked={ownerChecked}
            onChange={handleOwnerChange}
            required
          />
          <span className="checkmark"></span>
        </label>
        <label className="container1">
          Builder
          <input
            type="checkbox"
            checked={builderChecked}
            onChange={handleBuilderChange}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </label>
  );
};

export default CheckboxSection;
