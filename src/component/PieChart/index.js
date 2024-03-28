import { Component } from "react";
import { DNA } from "react-loader-spinner";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

import "./index.css";

class PieCharts extends Component {
  state = {
    populationList: [],
    loader: true,
  };

  componentDidMount() {
    this.getThePopulationData();
  }

  getThePopulationData = async () => {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await fetch(url);
    const data = await response.json();
    const datalis = [data.bpi.EUR, data.bpi.USD, data.bpi.GBP];
    const filterData = datalis.map((year) => {
      return {
        name: year.code,
        value: year.rate_float,
        currency: year.description,
      };
    });

    this.setState({
      populationList: filterData,
      loader: false,
    });
  };

  renderDataGraph = () => {
    const { populationList } = this.state;

    return (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={populationList}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {
              populationList.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
              ))
            }
          </Pie>
          <Tooltip />
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="bottom"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  renderLoader = () => (
    <div className="loader-container">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );

  render() {
    const { loader } = this.state;

    return (
      <div className="line-bar-cont">
        {loader ? this.renderLoader() : this.renderDataGraph()}
      </div>
    );
  }
}

export default PieCharts;
