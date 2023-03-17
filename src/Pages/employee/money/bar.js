import React, { useEffect, useRef } from "react";
import {Chart} from "chart.js";

const BarChart = (props) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: props.labels,
          datasets: [
            {
              label: "Working Hours",
              data: props.data,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default BarChart;
