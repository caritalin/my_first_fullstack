const fetchCities = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/cities');
        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.log(error);
    }
}
fetchCities();