import { Serie } from './Serie.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const totalSeasonsAverageElm: HTMLElement = document.getElementById("Average")!;

renderSeriesInTable(dataSeries);
totalSeasonsAverageElm.innerHTML = `${getTotalSeasonsAverage(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((Serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${Serie.number}</td>
                             <td>${Serie.name}</td>
                             <td>${Serie.channel}</td>
                             <td>${Serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
  }

function getTotalSeasonsAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons= totalSeasons + serie.seasons);
    let totalSeries: number = 0;
    series.forEach((serie) => totalSeries= totalSeries + 1);
    let promedio: number = totalSeasons/totalSeries
    return promedio;
  }