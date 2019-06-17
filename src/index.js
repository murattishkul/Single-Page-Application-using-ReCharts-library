import React from 'react';
import ReactDOM from 'react-dom'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts';
import './index.css'
import response from './App.js'

const {dataLineCount , dataLineTotal, dataBar} = response

class Greetings extends React.Component{
  render(){
    return(
      <header className = "greets">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
      Good Day Mr. Chanyoung Kwon!
      </header>
    )
  }
}

class Logo extends React.Component{
  render(){
    return(
      <header className="tc pv4 pv5-ns">
        <img
          src="https://avatars0.githubusercontent.com/u/38204149?s=400&amp;u=0b3af45921a81a71c83045aa4c1ad86d796d8a62&amp;v=4"
          class="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
          <h1 class="f5 f4-ns fw6 mid-gray">Murat Tishkul</h1>
          <h2 class="f6 gray fw2 ttu tracked">Ulsan</h2>
      </header>
    )
  }
}


class CustomizedAxisTick extends React.Component {
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


class LineTotal extends React.Component {
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
        <YAxis yAxisId="left" dataKey = "Loan Amount Total" orientation = "right" >
          <Label  value = "Loan Amount Total" position = "top" offset = {25} />
        </YAxis>
        <YAxis yAxisId = "right" dataKey = "Loan Amount Average" orientation = "left">
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

class LineCount extends React.Component {
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
        <YAxis yAxisId="left" dataKey = "Loan Amount Average" orientation = "left" >
          <Label  value = "Loan Amount Average" position = "top" offset = {25} />
        </YAxis>
        <YAxis yAxisId = "right" dataKey = "Loan Amount Count" orientation = "right">
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

class BarTotal extends React.Component{
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

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicked : [false, false, false],
    }
  }
  render(){
    return(
      <div>
      <div>
      <Logo/>
      </div>
      <div>
        <Greetings />
      </div>
        <div className = "wrapper">
          <button class="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib dark-gray" href="#0" onClick = {()=>{
          this.setState({clicked : [!this.state.clicked[0],this.state.clicked[1],this.state.clicked[2]]})}}>
            Line Chart #1
          </button>
        </div>
        <div className = "wrapper">
          <LineTotal clicked = {this.state.clicked} />
        </div>
        <div className = "wrapper">
          <button class="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib dark-gray" href="#0" onClick = {()=>{
          this.setState({clicked : [this.state.clicked[0],!this.state.clicked[1],this.state.clicked[2]]})}}>
            Line Chart #2
          </button>
        </div>
        <div className = "wrapper">
          <LineCount clicked = {this.state.clicked} />
        </div>
        <div className = "wrapper">
          <button class="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib dark-gray" href="#0" onClick ={ ()=>{
          this.setState({clicked : [this.state.clicked[0],this.state.clicked[1],!this.state.clicked[2]]})}}>
            Bar Chart #3
          </button>
        </div>
        <div className = "wrapper">
          <BarTotal clicked = {this.state.clicked} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
