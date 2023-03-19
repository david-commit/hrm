import "./fin.css";

import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Payslip({ employee }) {
  let generatePayslip = () => {
    let doc = new jsPDF();
    doc.text(`Payslip for ${employee.name}`, 10, 10);
    doc.text("Earnings", 10, 20);
    const earningsData = employee.earnings.map((e) => [
      e.description,
      e.amount,
    ]);
    doc.autoTable({
      startY: 25,
      head: [["Description", "Amount"]],
      body: earningsData,
    });
    doc.text("Deductions", 10, doc.autoTable.previous.finalY + 10);
    const deductionsData = employee.deductions.map((d) => [
      d.description,
      d.amount,
    ]);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 20,
      head: [["Description", "Amount"]],
      body: deductionsData,
    });
    doc.save("payslip.pdf");
  };
  return <button></button>;
}
