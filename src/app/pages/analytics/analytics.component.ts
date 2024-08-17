import { Component } from '@angular/core';
import { LineChartComponent } from '../../component/charts/line-chart/line-chart.component';
import { RadiantBarChartComponent } from '../../component/charts/radiant-bar-chart/radiant-bar-chart.component';
import { ApexAxisChartSeries } from 'ng-apexcharts';
import { dataRadiant, labels, months, salesData } from './data';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [LineChartComponent, RadiantBarChartComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {
  salesData: ApexAxisChartSeries = salesData;

  months: string[] = months;
  // this.chartOptions.title!.text = this.titleChart;
  //     this.chartOptions.labels = this.labels;
  //     this.chartOptions.series = this.dataChart;

  fruitsData: number[] = dataRadiant;
  labels: string[] = labels;
}
