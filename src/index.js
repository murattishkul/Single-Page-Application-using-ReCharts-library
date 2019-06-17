import React from 'react';
import ReactDOM from 'react-dom'
import { LineTotal, LineCount, BarTotal} from './map.js'
import './index.css'

const {Component} = React

function Greetings(props){
  return(
    <header className = "greets">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
        Good Day Mr. Chanyoung Kwon!
    </header>
  )
}

function Logo(props){
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

class App extends Component {
  constructor(props){
    super(props)
    this.state = { // peredelat
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
