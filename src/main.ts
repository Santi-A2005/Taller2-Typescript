import { series } from './data.js';

const tableBody: HTMLElement = document.querySelector('#seriesTable tbody')!;

series.forEach((serie) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  tableBody.appendChild(row);
});