'use client';
import React, {memo} from 'react';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
const LineChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'Dataset 1',
    //             data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    //             borderColor: 'rgb(255, 99, 132)',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //         },
    //         {
    //             label: 'Dataset 2',
    //             data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
    //             borderColor: 'rgb(53, 162, 235)',
    //             backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //         },
    //     ],
    // };
    const data = useSelector((state: RootState) => state.chart.data.Line);

    return <Line options={options} data={data} />;

}

export default memo(LineChart);