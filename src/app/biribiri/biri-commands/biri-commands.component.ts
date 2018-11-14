import {Component, OnInit} from '@angular/core';
import {GeneralApiService} from '../../general-api.service';
import {Chart} from '../../../../node_modules/chart.js';

@Component({
  selector: 'app-biri-commands',
  templateUrl: './biri-commands.component.html',
  styleUrls: ['./biri-commands.component.css']
})
export class BiriCommandsComponent implements OnInit {

  commands_data;
  current_period: string;
  period_length: number;
  period_amount: number;
  chart: Chart;

  constructor(private generalApiService: GeneralApiService) {
  }

  ngOnInit() {
    this.get_commands_data();
  }

  get_commands_data() {
    this.generalApiService.getCommandData().subscribe(data => {
      this.commands_data = data;
      this.setPeriodDaily();
    });
  }

  setPeriodDaily() {
    this.current_period = 'day';
    this.period_length = 24 * 60 * 60;
    this.period_amount = 14;
    this.setChart();
  }

  setPeriodHourly() {
    this.current_period = 'hour';
    this.period_length = 60 * 60;
    this.period_amount = 24;
    this.setChart();
  }

  setChart() {
    // Set constants
    let start_time = (new Date().getTime() / 1000);
    start_time = start_time - (start_time % this.period_length) - (this.period_amount * this.period_length);

    // Create labels
    const labels = [];
    let i;
    for (i = 0; i < this.period_amount; i++) {
      labels.push(start_time + this.period_length * i);
    }

    // Init data with total command count
    const total_commands = [];
    let num;
    for (const start of labels) {
      num = 0;
      for (const x of this.commands_data) {
        if ((start <= x.timestamp) && (x.timestamp < (start + this.period_length))) {
          num += 1;
        }
      }
      total_commands.push(num);
    }

    const datasets = [
      {
        label: 'Total commands',
        data: total_commands,
        borderColor: '#196f18',
        fill: false
      },
    ];

    // Add other command counters
    const command_names = new Set();
    for (const n of this.commands_data) {
      command_names.add(n.command.split(' ')[0]);
    }

    for (const command of Array.from(command_names)) {
      const d = [];
      for (const start of labels) {
        num = 0;
        for (const x of this.commands_data) {
          if ((start <= x.timestamp) && (x.timestamp < (start + this.period_length)) && (x.command.split(' ')[0] === command)) {
            num += 1;
          }
        }
        d.push(num);
      }

      datasets.push({
        label: command,
        data: d,
        borderColor: '#' + ((1 << 24) * Math.random() | 0).toString(16),
        fill: false
      });
    }

    // Convert timestamps to strings
    for (i = 0; i < this.period_amount; i++) {
      switch (this.current_period) {
        case 'hour':
          labels[i] = new Date(labels[i] * 1000).toLocaleTimeString();
          break;
        default:
          labels[i] = new Date(labels[i] * 1000).toDateString();
      }
    }

    // Construct actual chart
    this.chart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }
}
