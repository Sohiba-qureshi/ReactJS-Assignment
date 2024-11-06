
# Car Sales Dashboard

This project is a **Car Sales Dashboard** built with **React** and **Chart.js**. It provides an interactive user interface for viewing car sales data by company and model. Users can filter data through an interactive pie chart, search by company or model, and toggle data visibility in the table.

## Features

- **Interactive Pie Chart**: The pie chart represents car sales by company. Click on a segment to filter the data by that company.
- **Search Functionality**: Search for specific car models or companies to narrow down the data.
- **Data Toggle**: Hide or show the data table with a button click.
- **Responsive Design**: The app is styled with a simple layout, optimized for different screen sizes.

## Technologies Used

- **React**: For building the user interface and managing the application state.
- **Chart.js** & **react-chartjs-2**: For creating the interactive pie chart.
- **CSS**: For styling the components and layout.

## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── assets
│       └── logo.png          # Logo for the header
├── src
│   ├── components
│   │   ├── Header.js         # Header component with logo and title
│   │   ├── Footer.js         # Footer component
│   │   ├── SalesTable.js     # Table component for displaying car sales data
│   │   └── SalesPieChart.js  # Pie chart component for visualizing data
│   ├── App.js                # Main app component
│   ├── App.css               # Global styles
│   └── index.js              # Entry point
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/car-sales-dashboard.git
   cd car-sales-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

1. **Filter by Company**: Click on any segment in the pie chart to filter the table data by the selected company.
2. **Search**: Use the search input to filter car models or companies in real-time.
3. **Toggle Data Visibility**: Click the "Hide Data" button to hide the table, or "Show All Data" to reveal it.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the configuration for customization.

## Component Details

### `Header.js`

Displays a logo and title for the dashboard.

### `SalesTable.js`

Displays a table of car sales data. It accepts filtered data as props and renders it dynamically.

### `SalesPieChart.js`

Displays an interactive pie chart where each segment represents a company. Clicking a segment filters the table data by the selected company.

### `Footer.js`

Displays footer information for the app.

## Dependencies

- **React**: JavaScript library for building the UI.
- **Chart.js** & **react-chartjs-2**: For creating the interactive pie chart.
- **chart.js**: Charting library required by `react-chartjs-2`.

Feel free to replace `https://github.com/sohiba-qureshi/car-sales-dashboard.git` with the actual URL of your GitHub repository if you’re sharing this project publicly.
