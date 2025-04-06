"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const tableBody = document.querySelector('#seriesTable tbody');
data_js_1.series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
    tableBody.appendChild(row);
});
