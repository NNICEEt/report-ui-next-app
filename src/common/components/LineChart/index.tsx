import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ComponentProps } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: number[];
  labels: number[];
}

const LineChart = ({ data, labels }: LineChartProps) => {
  return (
    <Line
      data={{
        labels,
        datasets: [{ data, borderColor: "#1a7dff" }],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
            },
            stacked: true,
          },
        },
      }}
    />
  );
};

export default LineChart;
