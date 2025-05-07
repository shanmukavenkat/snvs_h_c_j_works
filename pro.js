const fetchTickers = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/tickers');
        const data = await response.json();
        const tableBody = document.getElementById('tickers');

        data.forEach(ticker => {
            const row = `
                <tr>
                    <td>${ticker.name}</td>
                    <td>${ticker.last}</td>
                    <td>${ticker.buy}</td>
                    <td>${ticker.sell}</td>
                    <td>${ticker.volume}</td>
                    <td>${ticker.base_unit}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (err) {
        console.error('Error fetching tickers:', err);
    }
};

// Load tickers on page load
document.addEventListener('DOMContentLoaded', fetchTickers);
