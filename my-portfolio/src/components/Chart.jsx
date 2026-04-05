import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const ChartComponent = () => {
  const data = {
    labels: ["Accuracy", "Precision", "Recall"],
    datasets: [
      {
        label: "Model Performance",
        data: [85, 80, 78],
      }
    ]
  }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Model Performance</h2>
      <Bar data={data} />
    </div>
  )
}

export default ChartComponent