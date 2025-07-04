import React, {memo} from 'react';
import { Line } from 'react-chartjs-2';
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

const LineChart = () => {
    const data = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July' , 'Aug' , 'Sep' ],
        datasets: [
            {
                label: 'Line Chart',
                backgroundColor: 'rgba(0,0,255,0.4)',
                borderColor: 'blue',
                data: [10, 15, 20, 25, 30, 35, 40, 45, 50],
                tension: 0.4
            },
        ],
    }

    return <Line data={data} />;

}

export default memo(LineChart);