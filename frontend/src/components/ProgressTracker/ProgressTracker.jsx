import React from "react";
import { Chart } from "react-google-charts";

function ProgressTracker({ correctCounter }) {
  const data = [
    ["Question", "Progress"],
    ["Question", correctCounter], // Use correctCounter prop as the progress value
    // Add more data points as needed
  ];

  const options = {
    title: "Progress",
    colors: ["steelblue"],
    // Add more customization options as needed
  };

  return (
    <Chart
      width={"100%"}
      height={"300px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
    />
  );
}

export default ProgressTracker;
