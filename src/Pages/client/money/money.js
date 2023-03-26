import React, { useState } from "react";

import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./money.css";
import { FaDownload } from "react-icons/fa";

export default function ClientMoney() {
  let [employeeData, setEmployeeData] = useState({
    name: "",
  });

  let handleDownload = () => {
    let fileUrl = "/workers.xlsx";
    let link = document.createElement("a");
    link.href = fileUrl;
    link.download = "workers.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function handleEmployeeData(event) {
    event.preventDefault();
    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: employeeData.name,
        employer_id: localStorage.getItem("employerId"), // assuming you're storing the employer's ID in local storage after they sign up
      }),
    })
      .then((response) => {
        if (response.ok) {
          // navigate to "/client/signup" if the response is ok
          console.log("SUccess");
          console.log(response);
        } else {
          response.json().then((data) => {
            console.log(data); // log any errors returned by the API
          });
        }
      })
      .catch((error) => console.log(error));
  }

  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-money">
        <ClientHeader message="Add new employees to your organisation" />

        <div id="client-money-section1">
          <h2>Add new employee to your organisation</h2>
          <button onClick={handleDownload}>
            <FaDownload />
            <p>Download Sheet</p>
          </button>
        </div>

        <form id="client-money-section2">
          <h4>Mass add employees to your organisation.</h4>
          <p>
            Download the excel sheet, fill out your employees details then
            upload it.
          </p>
          <input type="file" accept=".xlsx" className="file-upload-input" />
          <button type="submit">Add employees</button>
        </form>

        <h4>Add a single employee</h4>
        
        <form id="client-money-section3" onSubmit={handleEmployeeData}>
          <div>
            <input
              ype="text"
              name="name"
              value={employeeData.name}
              onChange={handleChange}
              placeholder="First name"
            />
            <input type="text" placeholder="Second name" />
            <input type="text" placeholder="Third name" />
            <input type="number" placeholder="Id number" />
          </div>
          <button type="submit">Register employee</button>
        </form>
      </section>
    </section>
  );
}
