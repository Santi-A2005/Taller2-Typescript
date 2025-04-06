import { series } from './datos.js';
var seriesTbody = document.getElementById('series');
var promedioTemporadasElm = document.getElementById("temporadas-promedio");
renderSeriesInTable(series);
promedioTemporadasElm.innerHTML = "".concat(getTemporadasPromedio(series));
function renderSeriesInTable(se) {
    se.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.codigo, "</td>\n                           <td>").concat(s.nombre, "</td>\n                           <td>").concat(s.canal, "</td>\n                           <td>").concat(s.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTemporadasPromedio(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    return "Temporadas Promedio: " + totalTemporadas / series.length;
}
