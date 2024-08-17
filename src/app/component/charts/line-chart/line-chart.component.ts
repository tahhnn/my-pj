import { Component, Input, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: `./line-chart.component.html`,
})
export class LineChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() titleChart: string = '';
  @Input() xaxisCategories: string[] = [];
  @Input() xaxisTitles: string = '';
  @Input() yaxisTitle: string = '';
  @Input() dataChart: ApexAxisChartSeries = [];
  constructor() {
    this.chartOptions = {
      chart: {
        height: 250,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        align: 'left',
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      markers: {
        size: 3,
      },
      xaxis: {
        title: {
          text: this.xaxisTitles,
        },
      },
      yaxis: {
        min: 5,
        max: 150000,
        stepSize: 15000,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    };
  }
  ngOnChanges() {
    if (this.chartOptions) {
      this.chartOptions.series = this.dataChart;
      this.chartOptions.xaxis!.categories = this.xaxisCategories;
      this.chartOptions.title!.text = this.titleChart;
      this.chartOptions.xaxis!.title!.text = this.xaxisTitles;
      this.chartOptions.yaxis!.title!.text = this.yaxisTitle;
    }
  }
}
