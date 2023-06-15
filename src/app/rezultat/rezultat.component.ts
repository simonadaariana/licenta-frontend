import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStates,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

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
  selector: 'app-rezultat',
  templateUrl: './rezultat.component.html',
  styleUrls: ['./rezultat.component.css']
})
export class RezultatComponent implements OnInit {
  consoleValueRezultat: number;
  consoleValueAbilitati: number;
  consoleValueCultura: number;
  consoleValueDateleSiAnalizaLor: number;
  consoleValueEcosistem: number;
  consoleValueExperientaClientilor: number;
  consoleValueInovatie: number;
  consoleValueOperatiuni: number;
  consoleValueOrganizare: number;
  consoleValueStrategie: number;
  consoleValueTehnologie: number;

  ngOnInit() {
    this.someFunction()
  }

  someFunction() {
    this.consoleValueRezultat = parseInt(<string>localStorage.getItem("suma_abilitati")) + parseInt(<string>localStorage.getItem("suma_cultura")) + parseInt(<string>localStorage.getItem("suma_datele_si_analiza_lor")) + parseInt(<string>localStorage.getItem("suma_ecosistem")) + parseInt(<string>localStorage.getItem("suma_experienta_clientilor")) + parseInt(<string>localStorage.getItem("suma_inovatie")) + parseInt(<string>localStorage.getItem("suma_operatiuni")) + parseInt(<string>localStorage.getItem("suma_organizare")) + parseInt(<string>localStorage.getItem("suma_strategie")) + parseInt(<string>localStorage.getItem("suma_tehnologie"));
    this.consoleValueAbilitati = parseFloat(<string>localStorage.getItem("abilitati"));
    this.consoleValueCultura = parseFloat(<string>localStorage.getItem("cultura"));
    this.consoleValueDateleSiAnalizaLor = parseFloat(<string>localStorage.getItem("datele_si_analiza_lor"));
    this.consoleValueEcosistem = parseFloat(<string>localStorage.getItem("ecosistem"));
    this.consoleValueExperientaClientilor = parseFloat(<string>localStorage.getItem("experienta_clientilor"));
    this.consoleValueInovatie = parseFloat(<string>localStorage.getItem("inovatie"));
    this.consoleValueOperatiuni = parseFloat(<string>localStorage.getItem("operatiuni"));
    this.consoleValueOrganizare = parseFloat(<string>localStorage.getItem("organizare"));
    this.consoleValueStrategie = parseFloat(<string>localStorage.getItem("strategie"));
    this.consoleValueTehnologie = parseFloat(<string>localStorage.getItem("tehnologie"));
    console.log(this.consoleValueRezultat)
  }

  onNextPage() {
    this.router.navigateByUrl("/grafice");
    this.someFunction()
  }

  chartOptions: any;
  chartData: any[];

  constructor(private router: Router) {

    this.chartOptions = {
      chart: {
        type: 'radar',
        toolbar: {
          show: false
        }
      },
      series: [{
        name: 'Rezultat general',
        data: [parseFloat(<string>localStorage.getItem("organizare")), parseFloat(<string>localStorage.getItem("tehnologie")), parseFloat(<string>localStorage.getItem("strategie")), parseFloat(<string>localStorage.getItem("operatiuni")), parseFloat(<string>localStorage.getItem("cultura")), parseFloat(<string>localStorage.getItem("abilitati")), parseFloat(<string>localStorage.getItem("experienta_clientilor")), parseFloat(<string>localStorage.getItem("datele_si_analiza_lor")), parseFloat(<string>localStorage.getItem("inovatie")), parseFloat(<string>localStorage.getItem("ecosistem"))]
      }],
      labels: ['organizare', 'tehnologie', 'strategie', 'operațiuni', 'cultură', 'abilități', 'experiența clienților', 'datele și analiza lor', 'inovație', 'ecosistem'],
      dataLabels: {
        style: {
          colors: ['black']
        }
      },
      plotOptions: {
        radar: {
          polygons: {
            fill: {
              colors: ['#a9c9f0', '#6290c8', '#376996', '#1f487e', '#16274a']
            }
          }
        }
      }
    };
  }
}

