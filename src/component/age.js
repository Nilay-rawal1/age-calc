import React, { useState, useEffect } from 'react';

function Calculator() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    document.title = 'Age Calculator';
  }, []);

  const handleChange = () => {
    const dob = document.getElementById("dob").value;
    if (dob === "") {
      alert("Please enter your date of birth");
      return;
    }
    const dobDate = new Date(dob);
    const todayDate = new Date();
    const age1 = todayDate.getFullYear() - dobDate.getFullYear();
    setAge(age1);
  };

  return (
    <center>
      <div>
        <h1>Age Calculator</h1>
        <p><strong>Enter your date of birth</strong></p>
        <input type="date" id="dob" style={{ width: "250px", marginBottom: "10px", padding: "5px" }}></input>
        <div>
          <button style={{ backgroundColor: "#007bff", color: "white", border: "0px", padding: "10px 20px", borderRadius: "5px" }} onClick={handleChange}>Calculate Age</button>
        </div>
        <h2>You are {age} years old</h2>
      </div>
    </center>
  );
}

export default Calculator;