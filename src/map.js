import React from 'react';
import ReactDOM from 'react-dom'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';
import './index.css'
import response from './App.js'

const {Component} = React
const {dataLineCount , dataLineTotal, dataBar} = response

export class CustomizedAxisTick extends Component {
  render () {
    const {x, y, payload, width, maxChars, lineHeight, fontSize, fill} = this.props;
    const rx = new RegExp(`.{1,${maxChars}}`, 'g');
    const chunks = payload.value.replace(/-/g,' ').split(' ').map(s =>  s.match(rx)).flat();
    const tspans = chunks.map((s,i) => <tspan x={0} y={lineHeight} dy={(i*lineHeight)}>{s}</tspan>);
    return (
    	<g transform={`translate(${x},${y})`}>
        <text width={width} height="auto" textAnchor="middle" fontSize={fontSize} fill={fill}>
          {tspans}
        </text>
      </g>
    );
  }
};

CustomizedAxisTick.defaultProps = {
	width: 50,
  maxChars: 10,
  fontSize: 16,
  lineHeight: 14,
  fill: "#333"
};


export class LineTotal extends Component {
  render() {
    if(this.props.clicked[0]){
    return (
      <LineChart className= "but"
        width={1000}
        height={500}
        data={dataLineTotal}
        margin={{
          top: 50, right: 150, left: 150, bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Annual Salary Range" /*padding = {{left : 50, right : 50}} */
        tick = {<CustomizedAxisTick/>} interval = {0} height = {80}>
          <Label  value = "Annual Salary Range" position = "bottom" offset = {10} />
        </XAxis>
        <YAxis yAxisId="left" dataKey = "Loan Amount Total" orientation = "right" stroke="#82ca9d" >
          <Label  value = "Loan Amount Total" position = "top" offset = {25} />
        </YAxis>
        <YAxis yAxisId = "right" dataKey = "Loan Amount Average" orientation = "left"  stroke="#8884d8">
          <Label  value = "Loan Amount Average" position = "top" offset = {25} />
        </YAxis>
        <Tooltip />
        <Legend payload = {[]}/>
        <Line yAxisId = "left" type="monotone" dataKey="Loan Amount Total" stroke="#8884d8" activeDot={{ r: 8 }}  />
        <Line yAxisId = "right" type="monotone" dataKey="Loan Amount Average"  stroke="#82ca9d" />
      </LineChart>
    );
  }
  else return null;
  }
}

export class LineCount extends Component {
  render() {
    if(this.props.clicked[1]){
    return (
      <LineChart className= "but"
        width={1000}
        height={500}
        data={dataLineCount}
        margin={{
          top: 50, right: 150, left: 150, bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Annual Salary Range" /* padding = {{left : 50, right : 50}} */
        tick = {<CustomizedAxisTick/>} interval = {0} height = {80}>
          <Label  value = "Annual Salary Range" position = "bottom" offset = {10} />
        </XAxis>
        <YAxis yAxisId="left" dataKey = "Loan Amount Average" orientation = "left" stroke="#8884d8" >
          <Label  value = "Loan Amount Average" position = "top" offset = {25} />
        </YAxis>
        <YAxis yAxisId = "right" dataKey = "Loan Amount Count" orientation = "right" stroke="#82ca9d">
          <Label  value = "Loan Amount Count" position = "top" offset = {25} />
        </YAxis>
        <Tooltip />
        <Legend payload = {[]}/>
        <Line yAxisId = "left" type="monotone" dataKey="Loan Amount Average" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId = "right" type="monotone" dataKey="Loan Amount Count"  stroke="#82ca9d" />
      </LineChart>
    );
  }
  else return null;
  }
}

export class BarTotal extends Component{
  render(){
    if(this.props.clicked[2]){
      return (<BarChart className= "but"
        width={1000}
        height={500}
        data={dataBar}
        margin={{
          top: 50, right: 150, left: 150, bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Annual Salary Range"
        tick = {<CustomizedAxisTick/>} interval = {0} height = {80}  >
          <Label  value = "Annual Salary Range" position = "bottom" offset = {0} />
        </XAxis>
        <YAxis yAxisId="left" dataKey = "Loan Amount Average" orientation = "left" stroke="#8884d8" >
          <Label  value = "Loan Amount Average" position = "top" offset = {25} />
        </YAxis>
        <YAxis yAxisId = "right" dataKey = "Loan Amount Total" orientation = "right" stroke="#82ca9d" >
          <Label  value = "Loan Amount Total" position = "top" offset = {25} />
        </YAxis>
        <Tooltip />
        <Legend payload = {[]}/>
        <Bar yAxisId = "left" type="monotone" dataKey="Loan Amount Average" fill="#8884d8" />
        <Bar yAxisId = "right" type="monotone" dataKey="Loan Amount Total" fill="#82ca9d" />
      </BarChart>
    )
    }
    else return null;
  }
}
