import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SalesTable from './SalesTable';
import SalesPieChart from './SalesPieChart';
import './App.css';

const salesData = [
    { company: 'Toyota', model: 'Camry', noOfCars: 150 },
    { company: 'Ford', model: 'F-150', noOfCars: 120 },
    { company: 'Honda', model: 'Accord', noOfCars: 90 },
    { company: 'Toyota', model: 'Corolla', noOfCars: 80 },
    { company: 'Ford', model: 'Mustang', noOfCars: 70 },
    { company: 'Honda', model: 'Civic', noOfCars: 60 },
];

const App = () => {
    const [filteredData, setFilteredData] = useState(salesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDataVisible, setIsDataVisible] = useState(true);

    const handleSelectCompany = (company) => {
        const newData = salesData.filter(data => data.company === company);
        setFilteredData(newData);
        setSearchTerm(''); // Clear search term if a company is selected
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const filtered = salesData.filter(data =>
            data.model.toLowerCase().includes(value.toLowerCase()) ||
            data.company.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const toggleDataVisibility = () => {
        setIsDataVisible(prev => !prev);
        if (!isDataVisible) {
            setFilteredData(salesData); // Reset data if showing all data
            setSearchTerm(''); // Clear search term on toggle
        }
    };

    return (
        <div className="app-container">
            <Header />
            <main>
                <SalesPieChart data={salesData} onSelectCompany={handleSelectCompany} />
                
                {isDataVisible && (
                    <>
                        <SalesTable salesData={filteredData} />
                        <div className="controls">
                            <input
                                type="text"
                                placeholder="Search by company or model"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button onClick={toggleDataVisibility}>
                                Hide Data
                            </button>
                        </div>
                    </>
                )}
                {!isDataVisible && (
                    <button onClick={toggleDataVisibility}>
                        Show All Data
                    </button>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
