
//import logo from './logo.svg';
//import './App.css';

const responseJSON1 = {
  type : 'lineChart',
  data : {
    axes : [
      {
        id : "x",
        name : 'Annual Salary Range',
        orientation : "bottom"
      },
      {
        id : "y",
        name : 'Loan Amount Average',
        orientation : "left"
      },
      {
        id : "y",
        name : 'Loan Amount Total',
        orientation : "right"
      },
      {
        id : "y",
        name : 'Loan Amount Count',
        orientation : "left"
      }
    ],
    points : [
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '30000000-35000000' ,
        yAxisLeftValue : 25000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 202000101000,
        yAxisRight1 : 'Loan Amount Count',
        yAxisRightValue1 : 2020,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '35000000-40000000' ,
        yAxisLeftValue : 30000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 305000549000,
        yAxisRight1 : 'Loan Amount Count',
        yAxisRightValue1 : 3050,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '40000000-43560000' ,
        yAxisLeftValue : 33000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 408000307000,
        yAxisRight1 : 'Loan Amount Count',
        yAxisRightValue1 : 4080,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '43560000-46560000' ,
        yAxisLeftValue : 35000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 603000409000,
        yAxisRight1 : 'Loan Amount Count',
        yAxisRightValue1 : 6030,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '46560000-50010000' ,
        yAxisLeftValue : 60000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 903000704000,
        yAxisRight1 : 'Loan Amount Count',
        yAxisRightValue1 : 9030,
      },
    ],
  },
}

const responseJSON2 = {
  type : 'barChart',
  data : {
    axes : [
      {
        id : "x",
        name : 'Annual Salary Range',
        orientation : "bottom"
      },
      {
        id : "y",
        name : 'Loan Amount Average',
        orientation : "left"
      },
      {
        id : "y",
        name : 'Loan Amount Total',
        orientation : "right"
      },
      {
        id : "y",
        name : 'Loan Amount Count',
        orientation : "left"
      }
    ],
    points : [
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '30000000-35000000' ,
        yAxisLeftValue : 25000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 202000101000,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '35000000-40000000' ,
        yAxisLeftValue : 30000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 305000549000,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '40000000-43560000' ,
        yAxisLeftValue : 33000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 408000307000,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '43560000-46560000' ,
        yAxisLeftValue : 35000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 603000409000,
      },
      {
        xAxis : 'Annual Salary Range',
        yAxisLeft : 'Loan Amount Average',
        xAxisValue : '46560000-50010000' ,
        yAxisLeftValue : 60000000,
        yAxisRight : 'Loan Amount Total',
        yAxisRightValue : 903000704000,
      },
    ],
  },
}

/*
const data = [
  {
    name: 'From-To' ,
  },
  {
    name: '30000000-35000000', total: 202000101000, avg: 25000000, count: 2020,
  },
  {
    name: '35000000-40000000', total: 305000549000, avg: 30000000, count: 3050,
  },
  {
    name: '40000000-43560000', total: 408000307000, avg: 33000000, count: 4080,
  },
  {
    name: '43560000-46560000', total: 603000409000, avg: 35000000, count: 6030,
  },
  {
    name: '46560000-5001000', total: 903000704000, avg: 60000000, count : 9030,
  },
  {
    name: '' ,
  },
];
*/

const response = {
  dataLineTotal : [],
  dataLineCount : [],
  dataBar : [],
}
function chartInit(){ //'Annual Salary Range', 'Loan Amount Count' 'Loan Amount Average',
  response.dataLineTotal.push({  'Annual Salary Range': 'From-To' })
  response.dataLineCount.push({  'Annual Salary Range': 'From-To' })
  response.dataBar.push({  'Annual Salary Range': 'From-To' })
}
function pointConstruct(xName, yName, xVal, yVal, yLeft, yAver,yr, yr1){
  var obj = {}
  obj[xName] = xVal
  obj[yName] = yVal
  obj[yLeft] = yAver
  obj[yr] = yr1
  return obj
}
function addLineObj(obj){
  response.dataLineTotal.push(obj)
  response.dataLineCount.push(obj)
}
function addBarObj(obj){
  response.dataBar.push(obj)
}
function chartConstruct (res){
  res.data.points.forEach((item)=>{
    res === responseJSON1 ? addLineObj(
    pointConstruct(item.xAxis, item.yAxisLeft, item.xAxisValue, item.yAxisLeftValue, item.yAxisRight, item.yAxisRightValue, item.yAxisRight1, item.yAxisRightValue1))
    : addBarObj(pointConstruct(item.xAxis, item.yAxisLeft, item.xAxisValue, item.yAxisLeftValue, item.yAxisRight,item.yAxisRightValue))
  })
}
function chartTerminate(){
  response.dataLineTotal.push({  'Annual Salary Range': '' })
  response.dataLineCount.push({  'Annual Salary Range': '' })
  response.dataBar.push({  'Annual Salary Range': '' })
}

chartInit();
chartConstruct(responseJSON1);
chartConstruct(responseJSON2);
chartTerminate();

export default response;
