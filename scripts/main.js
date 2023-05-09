import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var totalSeasonsAverageElm = document.getElementById("Average");
renderSeriesInTable(dataSeries);
totalSeasonsAverageElm.innerHTML = "".concat(getTotalSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(Serie.number, "</td>\n                             <td>").concat(Serie.name, "</td>\n                             <td>").concat(Serie.channel, "</td>\n                             <td>").concat(Serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var totalSeries = 0;
    series.forEach(function (serie) { return totalSeries = totalSeries + 1; });
    var promedio = totalSeasons / totalSeries;
    return promedio;
}
