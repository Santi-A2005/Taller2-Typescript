
import {Serie} from './serie.js';

import {series} from './datos.js';


const seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioTemporadasElm: HTMLElement = document.getElementById("temporadas-promedio")!;


renderSeriesInTable(series);

promedioTemporadasElm.innerHTML = `${getTemporadasPromedio(series)}`

function renderSeriesInTable(se: Serie[]): void {
  se.forEach((s) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.codigo}</td>
                           <td>${s.nombre}</td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });



}

function getTemporadasPromedio(series: Serie[]): String{
  let totalTemporadas: number = 0;
    series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);
    return "Temporadas Promedio: " + totalTemporadas/series.length;
  }

