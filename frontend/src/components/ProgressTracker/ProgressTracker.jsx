import React from "react";
import { Chart } from "react-google-charts";

const ProgressTracker = (props) => {

  const data = [
    ["Progress", "Beginning", "Now"],
    ["Two-Step Equations", 5, 10],
    ["Inequalities", 1, 8],
    ["Mean/Median/Mode", 1, 11],
  ];

  const options = {
      title: "Your Progress over Time",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Progress",
      minValue: 0,
    },
    vAxis: {
      title: "Classification",
    },
  };

    return ( 
        <div>
          <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />    
        </div>
     );
};
 
export default ProgressTracker;