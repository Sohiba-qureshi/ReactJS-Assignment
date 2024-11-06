import React from 'react';

const SalesTable = ({ salesData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Model</th>
                    <th>No of Cars</th>
                </tr>
            </thead>
            <tbody>
                {salesData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.company}</td>
                        <td>{data.model}</td>
                        <td>{data.noOfCars}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SalesTable;
