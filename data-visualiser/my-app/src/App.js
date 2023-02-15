import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class ChartComponent extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchData();
    setInterval(() => {
      this.fetchData();
    }, 1000);
  }

  fetchData() {
    fetch("http://data-access-api-digitalhealth-edge.apps-crc.testing/data")
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    const options = {
      chart: {
        type: "line"
      },
      title: {
        text: "Patient Health Data"
      },
      xAxis: {
        title: {
          text: "Timestamp"
        },
        categories: this.state.data.map(data => data.timestamp)
      },
      yAxis: {
        title: {
          text: "Heart Rate"
        }
      },
      series: [
        {
          name: "Heart Rate",
          data: this.state.data.map(data => data.heart_rate)
        }
      ]
    };

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default ChartComponent;