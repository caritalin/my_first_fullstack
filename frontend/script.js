"use strict:";
const populateTable = (data) => {
    const table = document.getElementById('cities-table');
    data.map(item => {
        const row = document.createElement('tr');
        const idColumn = document.createElement('td');
        idColumn.className = 'column-id';
        idColumn.innerHTML = '<a href= "./city.html">' + item.id  + '</a>';
        idColumn.onclick = () =>{
            sessionStorage.setItem('cityId',item.id)
        }
        row.appendChild(idColumn);
        table.appendChild(row);
        const cityColumn = document.createElement('td');
        cityColumn.className = 'city-id';
        cityColumn.innerText = item.city;
        row.appendChild(cityColumn);
        const countryColumn = document.createElement('td');
        countryColumn.className = 'country-id';
        countryColumn.innerText = item.country;
        row.appendChild(countryColumn);
    });
}