import {Component, ViewChild} from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent
} from "ng-apexcharts";
import {BackendService} from "../service/backend.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-medie',
  templateUrl: './medie.component.html',
  styleUrls: ['./medie.component.css']
})
export class MedieComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private backendService: BackendService) {
    backendService.getTotalAverageCategories().then((totalAverageCategories) => {
        this.chartOptions = {
          series: [totalAverageCategories.totalAverageCategoryAbilitati * 20,
            totalAverageCategories.totalAverageCategoryCultura * 20, totalAverageCategories.totalAverageCategoryDateleSiAnalizaLor * 20,
            totalAverageCategories.totalAverageCategoryEcosistem * 20, totalAverageCategories.totalAverageCategoryExperientaClientilor * 20,
            totalAverageCategories.totalAverageCategoryInovatie * 20, totalAverageCategories.totalAverageCategoryOperatiuni * 20,
            totalAverageCategories.totalAverageCategoryOrganizare * 20, totalAverageCategories.totalAverageCategoryStrategie * 20,
            totalAverageCategories.totalAverageCategoryTehnologie * 20],
          chart: {
            height: 390,
            type: "radialBar"
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  formatter: function (val: number) {
                    return val + '%';
                  }
                }
              }
            }
          },
          colors: ["#02022F", "#03045E", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8"],
          labels: ["Abilitati", "Cultura", "Datele si analiza lor", "Ecosistem", "Experienta clientilor",
            "Inovatie", "Operatiuni", "Organizare", "Strategie", "Tehnologie"],
          legend: {
            show: true,
            floating: true,
            fontSize: "16px",
            position: "left",
            offsetX: 50,
            offsetY: 10,
            labels: {
              useSeriesColors: true
            },
            formatter: function (seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
            },
            itemMargin: {
              horizontal: 3
            }
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  show: false
                }
              }
            }
          ]
        };
      }
    )
  }
}
