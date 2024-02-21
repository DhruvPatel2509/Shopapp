import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen" role="status">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
