import React, {memo} from 'react';
import { Pie } from 'react-chartjs-2';


const PieChart = () => {
    const data = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July' , 'Aug' , 'Sep' ],
        datasets: [
            {
                label: 'Pie Chart',
                backgroundColor: 'rgba(149, 255, 0, 0.4)', 
                borderColor: 'green',
                data: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5],
                tension: 0.5
            },
        ],
    }

    return <Pie data={data} />
}

export default memo(PieChart);