import React, {useState} from 'react';
import colors from 'tailwindcss/colors';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            pointBackgroundColor: colors.gray[600],
            pointBorderColor: colors.gray[100],
            pointBorderWidth: 2,
            pointRadius: 10,
            borderColor: colors.gray[700],
            borderWidth: 1,
            tension: 0.5
        },
    ],
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    }
};

const options = {
    tension: 0.5,
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: false,
                },
            },
        ],
    },
};

export default () => {
    return <Line data={data} options={options} />
}