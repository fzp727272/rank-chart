
var $ = require('jquery');

module.exports = {
    // colorList: [
    //     "#00c5d2",
    //     "#ef98d0",
    //     "#802bff",
    //     "#54c6af",
    //     "#edcd61",
    //     "#0081fa",
    //     "#73e3f8",
    //     "#ffd473",
    //     "#1c3a9f",
    //     "#421b9f",
    //     "#16889d"
    // ],
    init: function (ele, AxisData, data,colorList) {
        // console.log(this.colorList)
        var AxisTextStyle = {
            fontSize: 10,
        };
        colorList = colorList;
        var dataLine = AxisData.map(function (item) {
            return { value: item, textStyle: AxisTextStyle };

        });
        option = {
            angleAxis: {
                show: false,
                startAngle: -90,
                axisLine: {
                    show: false,
                }, splitLine: {
                    show: false,
                }

            },
            radiusAxis: {
                type: 'category',
                data: dataLine,
                z: 10,
                inverse: true,
                min: 0,
                max: 12,

                // boundaryGap:["0%","70%"],
                // min:100,

                // axisLine:{
                //     show:false,
                // },
                // splitLine:{
                //     show:false,
                // }
            },
            // legend: {
            //     show:true,
            //     data:AxisData,
            //     right:0,
            //   //   x:150,
            //     textStyle:{
            //         color:"rgba(255,255,255,.4)"
            //     },
            //     borderRadius:20,
            //     itemWidth:10,
            //     itemHeight:10,
            //     // left: 10
            // },

            polar: {
            },
            // grid:{
            //     left:0,
            //     right:100,
            // },
            series: [{
                type: 'bar',
                data: data,
                // color:["#f0f0f0","000"],
                coordinateSystem: 'polar',
                barWidth: 4,
                itemStyle: {
                    normal: {
                        color: function (params) {

                            // build a color map as your need.

                            // var color = this.colorList;

                            return colorList[params.dataIndex]

                        },
                    }
                },
                name: 'C',
                stack: 'a'
            }],
            // legend: {
            //     show: true,
            //     data: ['A', 'B', 'C']
            // }
        };

        var chart = echarts.init(ele.get(0), 'customed');
        chart.setOption(option);

    },
    // showTag: function (ele, AxisData, data) {
    //     var color = this.colorList;
    //     //    console.log(color[0])
    //     data.map(function (item, index) {
    //         var style = 'style="background:' + color[index] + ' " '
    //         // console.log(style)
    //         var htmlinsert = ' <div class="tag-item"> <div class="color-tip"' + style + '> </div>' + AxisData[index] + ' : ' + item + '</div>'

    //         ele.append(htmlinsert)
    //     })

    // },
    dashboardChartShow: function (ele,value,maxValue,color) {

        var color1 = "rgba("+color+',1)';
        var color2 ="rgba("+ color+',.6)';
        var color3 = "rgba("+ color+',.3)';
        option = {

            toolbox: { //可视化的工具箱
                show: false,
                feature: {
                  restore: { //重置
                    show: true
                  },
                  saveAsImage: {//保存图片
                    show: true
                  }
                }
              },
            //   tooltip: { //弹窗组件
            //     formatter: "{a} <br/>{b} : {c}%"
            //   },
        
              series: [{
                name: '退货仓',
                type: 'gauge',
                radius: "85%",
                detail: { formatter: '{value} %' },
                axisLine: { 
                    show:false,           // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                    width: 6,
                    //  color: [[0.3, '#00C5D2'], [0.6, '#4E72F0'], [1, '#FF9A00']]
                    color: [[0.33, color3], [0.67, color2], [1, color1]]
                  }
                },
                splitLine: { // 分隔线
                    // length: 25, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 0,
                        color: 'rgba(0,0,0,0)',
                        shadowColor: 'rgba(0,0,0,0)', //默认透明
                        shadowBlur: 10,
                        opacity:0,
                    }
                },
                pointer: {//控制指针样式
                  shadowColor: '#fff', //默认透明
        
                  shadowBlur: 15,
                  width: 3//控制指针宽度
                },
                title: {
                  // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  // fontWeight: 'bolder',
                  fontSize: 12,
                  color:color1
                  // fontStyle: 'italic'
                },
                axisLabel: {
                  show: false,
                  textStyle: {
                    color: '#fff',
                    fontSize: 7,
                  }
                },
                axisTick:{
                    splitNumber:0,
                    lineStyle:{
                        opacity:0.3,
                    }
                },
                max:maxValue,

                detail: {
                  textStyle: {
                    // fontWeight: 'bolder',
                    // color: 'blue',
                    fontSize: 14,
                    color:color1,
                  }
                },
        
                data: [{ value: value, name: '退货仓' }]
              }]
         };
        var chart = echarts.init(ele.get(0), 'customed');
        chart.setOption(option);

    }


}


