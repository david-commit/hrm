import React from "react";
import { Line } from "react-chartjs-2";

export default function AreaChart({ data, options, title }) {
  return (
    <>
      <div className="area-chart">
        <p className="area-chart-header">{title}</p>
      </div>
      <Line data={data} options={options} />
    </>
  );
}
