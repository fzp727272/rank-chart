var $ = require('jquery');
var inboundChart = require('./inboundChart.js');
var dayChart = require('./dayChart.js');
var storeRationChart = require('./storeRation.js');
var data = require('./data');
//	chart1
$(function() {
  // app.title = '堆叠条形图';
  var renderChart = function(renderData, ele) {
    let types = [];
    // renderData.find((item,key) =>{
    // 	return item.Type ==
    // })
    renderData.map(function(item, key) {
      const type = item.Type;
      if (!types.includes(type)) {
        types.push(type);
      }
    });

    let datas = [];
    renderData.map(function(item, key) {
      const dataItem = item.Date;
      if (!datas.includes(dataItem)) {
        datas.push(dataItem);
      }
    });
    // console.log(datas);
    let setSeries = [];
    types.map(function(item) {
      const _item = item;
      const filterItem = renderData.filter(function(item) {
        return item.Type == _item;
      });
      // console.log(filterItem)
      let _itemdata = [];
      filterItem.map(function(item) {
        _itemdata.push(item.Quantity);
      });
      // console.log(_itemdata)
      let cash = {
        name: _item,
        type: 'bar',
        stack: '总量',
        // label: {
        // 	normal: {
        // 		show: true,
        // 		position: 'insideRight'
        // 	}
        // },
        data: _itemdata,
      };
      setSeries.push(cash);
    });

    // renderData.map(function(item,key){

    // })

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: types,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      yAxis: {
        show: true,
		type: 'value',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#333'
			}
		}
      },
      xAxis: {
        type: 'category',
		data: datas,
		axisLabel: {
			show: true,
			textStyle: {
				color: '#333'
			}
		}
      },
      series: setSeries,
    };
    var chart = echarts.init(ele.get(0), 'customed');
    chart.setOption(option);
  };
  renderChart(data.data1, $('#chart1'));
  renderChart(data.data2, $('#chart2'));
  renderChart(data.data3, $('#chart3'));
});
