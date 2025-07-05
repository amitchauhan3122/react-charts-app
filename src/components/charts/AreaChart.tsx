'use client';
import React, {memo} from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const AreaChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Area Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
            fill: true,
            label: 'Dataset 2',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data} />;
 
 }
 
 export default memo(AreaChart);