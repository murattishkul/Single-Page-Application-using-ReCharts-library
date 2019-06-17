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
        id : "y1",
        name : 'Loan Amount Average',
        orientation : "left"
      },
      {
        id : "y2",
        name : 'Loan Amount Total',
        orientation : "right"
      },
      {
        id : "y3",
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
        id : "y1",
        name : 'Loan Amount Average',
        orientation : "left"
      },
      {
        id : "y2",
        name : 'Loan Amount Total',
        orientation : "right"
      },
      {
        id : "y3",
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

var getResponse = {
  responseJSON1 : responseJSON1,
  responseJSON2 : responseJSON2
}
export default getResponse
