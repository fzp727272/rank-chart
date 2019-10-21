var $ = require('jquery');


module.exports = {
init:function(ele,xAxisData,data1,data2,data3){
      // app.title = '柱状图框选';

    
      var itemStyle = {
          normal: {
    
          },
          emphasis: {
              barBorderWidth: 1,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0,0,0,0.5)'
          }
      };
  
      option = {
        //   title: {
        //       text: '出入库展示',
        //       left: 20,
        //       // subtext: '纯属虚构'
        //   },
          backgroundColor: 'rgba(255,255,255,0)',
          legend: {
              data: ['出库', '入库', '库存',],
              top: 0,
            //   x:150,
              textStyle:{
                  color:"rgba(255,255,255,.4)"
              },
              borderRadius:20,
              itemWidth:10,
              itemHeight:10,
              // left: 10
          },
          // brush: {
          //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
          //     xAxisIndex: 0
          // },
        //   toolbox: {
        //       feature: {
        //           // mark : {show: true},
        //           // dataView : {show: true, readOnly: false},
        //           // magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        //           restore: { show: true },
        //           saveAsImage: { show: true }
        //       },
        //       right:40,
        //       // y: 'bottom'
        //   },
          tooltip: {
              axisPointer:{
                type:'shadow',
                // lineStyle:{
                //    width:1,
                //    color:'#575565' 
                // }
                shadowStyle:{
                    shadowColor:'#000',
                    color:"rgba(8,6,17,.3)",
                    // z:"-100",
                    // opacity:".1"
                    // shadowBlur:20,
                }
              },
              trigger: 'axis',
              showDelay: 0,
              hideDelay: 50,
              transitionDuration:0,
              backgroundColor : 'rgba(0,0,0,0.9)',
            //   borderColor : 'rgba(47,69,84,1)',
              borderRadius : 8,
              borderWidth: 2,
              padding: 4,   
          },
          xAxis: {
              data: xAxisData,
              // name: 'X Axis',
              silent: false,
              splitLine:{
                show:false,
                lineStyle:{
                    color:'rgba(255,255,255,0.3)',
                    width:10,
                }
            } ,
            // splitLine: {
                
            // },
     
              splitArea: { show: false }
          },
          yAxis: {
              // inverse: true,
              splitArea: { show: false },
              splitLine: {
                show: true, 
                //  改变轴线颜色
                lineStyle: {
                    width:.3,
                    // 使用深浅的间隔色
                    color: ["rgba(255,255,255,.3)"]
                }                            
        },
          
          },
          grid: {
              left: 20,
              right: 20,
              top: 50,
              bottom: 20,
              containLabel: true
          },
          // visualMap: {
          //     type: 'continuous',
          //     dimension: 1,
          //     text: ['High', 'Low'],
          //     inverse: true,
          //     itemHeight: 200,
          //     calculable: true,
          //     min: -2,
          //     max: 6,
          //     top: 60,
          //     left: 10,
          //     inRange: {
          //         colorLightness: [0.4, 0.8]
          //     },
          //     outOfRange: {
          //         color: '#bbb'
          //     },
          //     // controller: {
          //     //     inRange: {
          //     //         color: '#2f4554'
          //     //     }
          //     // }
          // },
  
  
          series: [
              {
                  name: '出库',
                  type: 'bar',
                  barWidth: 6,
                 
                  itemStyle: itemStyle,
                  data: data1
              },
              {
                  name: '入库',
                  type: 'bar',
                  barWidth: 6,
                 
                  itemStyle: itemStyle,
                  data: data2
              },
              {
                  name: '库存',
                  type: 'bar',
                  barWidth: 6,
                 
                  itemStyle: itemStyle,
                  data: data3
              },
  
          ]
      };
      var shouruChart = echarts.init(ele.get(0), 'customed');
      shouruChart.setOption(option);
      // myChart.on('brushSelected', renderBrushed);
  
      // function renderBrushed(params) {
      //     var brushed = [];
      //     var brushComponent = params.batch[0];
  
      //     for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
      //         var rawIndices = brushComponent.selected[sIdx].dataIndex;
      //         brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
      //     }
  
      //     myChart.setOption({
      //         title: {
      //             backgroundColor: '#333',
      //             text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
      //             bottom: 0,
      //             right: 0,
      //             width: 100,
      //             textStyle: {
      //                 fontSize: 12,
      //                 color: '#fff'
      //             }
      //         }
      //     });
      // }
    
}
};