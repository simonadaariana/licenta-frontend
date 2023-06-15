import {Component, OnInit} from '@angular/core';
import {ApexAxisChartSeries, ApexMarkers, ApexYAxis, ApexStroke, ChartComponent, ApexFill, ApexDataLabels, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexLegend, ApexPlotOptions, ApexStates, ApexTooltip } from 'ng-apexcharts';
import {Router} from "@angular/router";


export interface GeneralStatsChartOptions {

  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  states: ApexStates;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
}

@Component({
  selector: 'app-grafice',
  templateUrl: './grafice.component.html',
  styleUrls: ['./grafice.component.css']
})


export class GraficeComponent{

    organizare: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Organizare', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("organizare1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("organizare2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("organizare3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("organizare4")) }] }],
      yaxis: {
      }
    };
  tehnologie: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Tehnologie', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("tehnologie1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("tehnologie2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("tehnologie3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("tehnologie4")) }] }],

  };

  strategie: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Strategie', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("strategie1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("strategie2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("strategie3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("strategie4")) }] }],

  };

  operatiuni: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Operatiuni', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("operatiuni1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("operatiuni2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("operatiuni3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("operatiuni4")) }] }],

  };

  cultura: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Cultura', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("cultura1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("cultura2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("cultura3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("cultura4")) }] }],

  };

  abilitati: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Abilitati', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("abilitati1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("abilitati2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("abilitati3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("abilitati4")) }] }],

  };

  experienta_clientilor: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Experienta clientilor', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("experienta_clientilor1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("experienta_clientilor2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("experienta_clientilor3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("experienta_clientilor4")) }] }],

  };

  datele_si_analiza_lor: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Datele si analiza lor', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("datele_si_analiza_lor1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("datele_si_analiza_lor2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("datele_si_analiza_lor3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("datele_si_analiza_lor4")) }] }],

  };

  inovatie: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Inovatie', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("inovatie1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("inovatie2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("inovatie3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("inovatie4")) }] }],

  };

  ecosistem: Partial<GeneralStatsChartOptions> = {
    chart: { type: 'bar' },
    series: [{ name: 'Ecosistem', data: [{ x: 'întrebarea 1', y: parseInt(<string>localStorage.getItem("ecosistem1")) },
        { x: 'întrebarea 2', y: parseInt(<string>localStorage.getItem("ecosistem2")) },
        { x: 'întrebarea 3', y: parseInt(<string>localStorage.getItem("ecosistem3")) },
        { x: 'întrebarea 4', y: parseInt(<string>localStorage.getItem("ecosistem4")) }] }],

  };


  onNextPage() {
    this.router.navigateByUrl("/medie");
  }
  constructor(private router: Router) {

  }


}


