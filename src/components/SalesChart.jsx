import React from "react";
import { Chart, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const SalesChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Aug"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 150, 220, 280, 320],
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Profit",
        data: [220, 90, 350, 120, 80, 220],
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,   // <-- important
  };

  return (
    
  <div className="chart">
    <h1 className="text-2xl font-semibold mb-3">Sales Chart</h1>
    <div className="p-4 border rounded-lg bg-white">

      {/* chart wrapper controls size */}
      <div className="h-74 w-full">
        <Line data={data} options={options} />
      </div>
      
    </div>
  </div>
  );
};

export default SalesChart;
