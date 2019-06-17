import getResponse from './API.js'
const {responseJSON1 , responseJSON2} = getResponse;

const response = {
  dataLineTotal : [],
  dataLineCount : [],
  dataBar : [],
}
const chartInit = () => { //'Annual Salary Range', 'Loan Amount Count' 'Loan Amount Average',
  response.dataLineTotal.push({  'Annual Salary Range': 'From-To' })
  response.dataLineCount.push({  'Annual Salary Range': 'From-To' })
  response.dataBar.push({  'Annual Salary Range': 'From-To' })
}
const pointConstruct = (xName, yName, xVal, yVal, yLeft, yAver,yr, yr1) => {
  var obj = {}
  obj[xName] = xVal
  obj[yName] = yVal
  obj[yLeft] = yAver
  obj[yr] = yr1
  return obj
}
const addLineObj = (obj) => {
  response.dataLineTotal.push(obj)
  response.dataLineCount.push(obj)
}
const addBarObj = (obj) => {
  response.dataBar.push(obj)
}
const chartConstruct = (res) => {
  res.data.points.forEach((item)=>{
    res === responseJSON1 ? addLineObj(
    pointConstruct(item.xAxis, item.yAxisLeft, item.xAxisValue, item.yAxisLeftValue, item.yAxisRight, item.yAxisRightValue, item.yAxisRight1, item.yAxisRightValue1))
    : addBarObj(pointConstruct(item.xAxis, item.yAxisLeft, item.xAxisValue, item.yAxisLeftValue, item.yAxisRight,item.yAxisRightValue))
  })
}
const chartTerminate = ()=>{
  response.dataLineTotal.push({  'Annual Salary Range': '' })
  response.dataLineCount.push({  'Annual Salary Range': '' })
  response.dataBar.push({  'Annual Salary Range': '' })
}

chartInit();
chartConstruct(responseJSON1);
chartConstruct(responseJSON2);
chartTerminate();

export default response;
