import { Component, Input, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexChart,
  NgApexchartsModule,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexAxisChartSeries,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-radiant-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './radiant-bar-chart.component.html',
  styleUrl: './radiant-bar-chart.component.css',
})
export class RadiantBarChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() dataChart: number[] = [];
  @Input() titleChart: string = '';
  @Input() labels: string[] = [];
  constructor() {
    this.chartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      title: {
        text: 'Radiant Bar Chart',
        align: 'center',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return '249';
              },
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };
  }
  ngOnChanges() {
    if (this.chartOptions) {
      this.chartOptions.title!.text = this.titleChart;
      this.chartOptions.labels = this.labels;
      this.chartOptions.series = this.dataChart;
    }
  }
}
