import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const SalesPieChart = ({ data, onSelectCompany }) => {
    const chartData = {
        labels: data.map(item => item.company),
        datasets: [
            {
                data: data.map(item => item.noOfCars),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    const handleClick = (event, chartElement) => {
        if (chartElement && chartElement.length > 0) {
            const index = chartElement[0].index; // Get index of clicked segment
            const selectedCompany = data[index].company;
            onSelectCompany(selectedCompany); // Pass selected company to parent
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '50px' }}>
            <Pie
                data={chartData}
                options={{
                    onClick: (event, elements) => handleClick(event, elements),
                }}
                width={200}
                height={200}
            />
        </div>
    );
};

export default SalesPieChart;
