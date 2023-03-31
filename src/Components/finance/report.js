import jsPDF from "jspdf";
import "jspdf-autotable";

export default function EmployeePerformanceReport({ employee }) {
  const generateReport = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add the employee name to the PDF
    doc.setFontSize(20);
    doc.text(`Performance Report for ${employee.name}`, 10, 20);

    // Add a table for the performance data
    const performanceData = employee.performance.map((p) => [
      p.date,
      p.metric1,
      p.metric2,
      p.metric3,
    ]);
    doc.autoTable({
      startY: 40,
      head: [["Date", "Metric 1", "Metric 2", "Metric 3"]],
      body: performanceData,
    });

    // Save the PDF
    doc.save(`Performance Report for ${employee.name}.pdf`);
  };

  return <button onClick={generateReport}>Generate Performance Report</button>;
}
