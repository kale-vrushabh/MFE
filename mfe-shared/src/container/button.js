import React from "react";
import "../index.css";

const Button = () => {
  return (
    <>
      <div>
        <h4>FORM COMPONENT FROM SHARED-1</h4>
        <div>
          <input value="" onChange={() => {}} placeholder="Name" />
          <input value="" onChange={() => {}} placeholder="Middle Name" />
          <input value="" onChange={() => {}} placeholder="Surname" />
          <button>SUBMIT</button>
        </div>
      </div>
    </>
  );
};

export default Button;
