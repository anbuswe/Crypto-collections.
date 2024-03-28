import { Component } from "react";
import { DNA } from "react-loader-spinner";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "./index.css";

class PopulationBarChart extends Component {
  state = {
    populationList: [],
    loader: true,
  };

  componentDidMount() {
    this.getPopulation();
  }

  getPopulation = async () => {
    this.setState({
      loader:true
    })
    const bitCoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await fetch(bitCoinUrl);
    const data = await response.json();
    console.log(data);

    const url =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const responses = await fetch(url);
    const datas = await responses.json();
    console.log(datas);
    const filterData = datas.data.map((year) => {
      return {
        nation: year.Nation,
        year: year.Year,
        population: year.Population,
        id: year["ID Year"],
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
        <BarChart
          data={populationList}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis color="#fff" dataKey="year" />
          <YAxis />
          <CartesianGrid
            strokeDasharray="3 3"
            fill="#616161"
            fillOpacity={0.5}
          />
          <Tooltip />
          <Legend height="15" layout="vertical" />
          <Bar dataKey="population" fill="#24BF14" />
        </BarChart>
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

export default PopulationBarChart;
