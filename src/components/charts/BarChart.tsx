import React ,{memo} from 'react';
import { Bar } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Tooltip,
//     Legend
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July' , 'Aug' , 'Sep' ],
        datasets: [
            {
                label: 'Bar Chart',
                data: [0, 5, 10, 15, 20, 25, 30, 35, 40],
                backgroundColor: 'rgba(255, 42, 0, 0.33)',
                borderColor: 'black',
                tension: 0.4
            }
        ]
    }

    return <Bar data={data} />
}

export default memo(BarChart);