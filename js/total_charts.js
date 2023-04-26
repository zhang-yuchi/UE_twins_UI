function init_myChart5(){
	//var XData=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
	//var yData=[1243,2315,1164,3021,3521,4121,2001,1983,2541,2612,2331,1992];
	var XData=["水津关","大兴","楼方","花滩","小关子","长石坝","中咀","佛山","下村","甘溪坡"];
	var yData=[1243,2315,1164,3021,3521,4121,2001,1983,1432,3766];
	option = {
		backgroundColor:"",
		xAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			
			data: XData,
			axisLabel: {
				formatter: function(value) {
					var ret = ""; //拼接加\n返回的类目项
					var maxLength = 1; //每项显示文字个数
					var valLength = value.length; //X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1) //如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = ""; //每次截取的字符串
							var start = i * maxLength; //开始截取的位置
							var end = start + maxLength; //结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					} else {
						return value;
					}
				},
				interval: 0,
				fontSize: 10,
				fontWeight: 100,
				textStyle: {
					color: '#ddd',

				}
			},
			axisLine: {
				lineStyle: {
					color: '#ddd'
				}
			}
		},
		yAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			
			axisLabel: {
				textStyle: {
					color: '#ddd',
					fontSize: 10,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#ddd'
				}
			}
		},
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		series: [{
			name:'生态流量',
			type:"bar",
			itemStyle: {
				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: '#00d386' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#0076fc' // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					},
					barBorderRadius: 15,
				}
			},
			 label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
			data: yData,
			barWidth: 16,
		},{
			name:'峰值',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				   /* color:'#c4cddc'*/
				}
			},
			data:yData
		}]
	};
	myChart5.setOption(option);
}
function leidatu(){
	// var imgPath = ['http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png']
	var myChart = echarts.init(document.getElementById('pjstxl'),'light');
	// option = {
	//     color: ['#00c2ff'],
	//     legend: {
	//         show: true,
	//         // icon: 'circle',//图例形状
	//         bottom: 0,
	//         center: 0,
	//         itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
	//         itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
	//         itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
	//         textStyle: {
	//             fontSize: 12,
	//             color: '#ade3ff'
	//         },
	//         data: ['发电流量累计'],
	//     },
	//     radar: [{
	//         indicator: [{
	//                 text: '重庆市',
	//                 max: 100
	//             },
	//             {
	//                 text: '北京市',
	//                 max: 100
	//             },
	//             {
	//                 text: '上海市',
	//                 max: 100
	//             },
	//             {
	//                 text: '广东省',
	//                 max: 100
	//             },
	//             {
	//                 text: '浙江省',
	//                 max: 100
	//             }
	//         ],

	//         textStyle: {
	//             color: '#ade3ff'
	//         },
	//         center: ['50%', '50%'],
	//         radius: 60,
	//         startAngle: 90,
	//         splitNumber: 3,
	//         orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
	//         // shape: 'circle',
	//         // backgroundColor: {
	//         //     image:imgPath[0]
	//         // },
	//         name: {
	//             formatter: '{value}',
	//             textStyle: {
	//                 fontSize: 12, //外圈标签字体大小
	//                 color: '#5b81cb' //外圈标签字体颜色
	//             }
	//         },
	//         splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
	//             show: true,
	//             areaStyle: { // 分隔区域的样式设置。
	//                 color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
	//             }
	//         },
	//         // axisLabel:{//展示刻度
	//         //     show: true
	//         // },
	//         axisLine: { //指向外圈文本的分隔线样式
	//             lineStyle: {
	//                 color: '#153269'
	//             }
	//         },
	//         splitLine: {
	//             lineStyle: {
	//                 color: '#113865', // 分隔线颜色
	//                 width: 1, // 分隔线线宽
	//             }
	//         }
	//     }, ],
	//     series: [{
	//         name: '雷达图',
	//         type: 'radar',
	//         itemStyle: {
	//             emphasis: {
	//                 lineStyle: {
	//                     width: 4
	//                 }
	//             }
	//         },
	//         data: [ {
	//             name: '发电流量累计',
	//             value: [37, 80, 12, 50, 25],
	//             symbolSize: 2.5,
	//             itemStyle: {
	//                 normal: {
	//                     borderColor: '#e92b77',
	//                     borderWidth: 2.5,
	//                 }
	//             },
	//             areaStyle: {
	//                 normal: { // 单项区域填充样式
	//                     color: {
	//                         type: 'linear',
	//                         x: 0, //右
	//                         y: 0, //下
	//                         x2: 1, //左
	//                         y2: 1, //上
	//                         colorStops: [{
	//                             offset: 0,
	//                             color: '#e92b77'
	//                         }, {
	//                             offset: 0.5,
	//                             color: 'rgba(0,0,0,0)'
	//                         }, {
	//                             offset: 1,
	//                             color: '#e92b77'
	//                         }],
	//                         globalCoord: false
	//                     },
	//                     opacity: 1 // 区域透明度
	//                 }
	//             }
	//         }]
	//     }, ]
	// };
	option = {
		legend: {
		  data: ['累计发电流量', '累计生态泄流'],
		  orient: 'vertical',
		  right: 10,
		  top: 'center',
		  textStyle:{
			color:"#fff"
		  }
		},
		radar: {
			axisLine: {
				lineStyle: {
					color: '#ddd', // 颜色
					width: 1 // 粗细
				}
			},
		  // shape: 'circle',
		  indicator: [
			{ name: '水津关', max: 6500 },
			{ name: '大兴', max: 16000 },
			{ name: '楼方', max: 30000 },
			{ name: '花滩', max: 38000 },
			{ name: '小关子', max: 52000 },
			{ name: '长石坝', max: 38000 },
			{ name: '中咀', max: 6500 },
			{ name: '佛山', max: 6500 },
			{ name: '下村', max: 6500 },
			{ name: '甘溪坡', max: 6500 },
		  ]
		},
		series: [
		  {
			name: '水电站信息',
			type: 'radar',
			data: [
			  {
				value: [4200, 3000, 20000, 35000, 50000, 3000,3000,3000,4000,4000],
				name: '累计发电流量'
			  },
			  {
				value: [5000, 14000, 28000, 26000, 42000, 21000,3000,3000,3000,4000,4000],
				name: '累计生态泄流'
			  }
			]
		  }
		]
	  };

	myChart.setOption(option);
}
function shuiqing(){
	var myChart = echarts.init(document.getElementById('shuiqing'),'light');
	option = {
		tooltip: {
		  trigger: 'axis',
		  axisPointer: { type: 'cross' }
		},
		legend: {		 
		  textStyle:{
			color:"#fff"
		  }},
		xAxis: [
		  {
			type: 'category',
			axisTick: {
			  alignWithLabel: true
			},
			data: [
			  '多营坪',
			  '洪雅',
			  '夹江',
			  '宝兴',
			  '芦山',
			  '天全',
			  '荥经',
			  '孔坪',
			  '陇西',
			  '名山',
			  '天宫',
			  '仁美'
			],
			axisLine: {
				lineStyle: {
					color: '#ddd', // 颜色
					width: 1 // 粗细
				}
			},
		  }
		],
		yAxis: [
		  {
			type: 'value',
			name: '降水量',
			// min: 0,
			// max: 250,
			position: 'right',
			axisLabel: {
			  formatter: '{value} mm'
			},
			axisLine: {
				lineStyle: {
					color: '#ddd', // 颜色
					width: 1 // 粗细
				}
			},
		  },
		  {
			type: 'value',
			name: '径流量',
			min: 0,
			max: 5000,
			position: 'left',
			axisLine: {
				lineStyle: {
					color: '#ddd', // 颜色
					width: 1 // 粗细
				}
			},
			axisLabel: {
			  formatter: '{value} m3/s'
			}
		  }
		],
		series: [
		  {
			name: '降水量',
			type: 'bar',
			yAxisIndex: 0,
			data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]
		  },
		  {
			name: '径流量',
			type: 'line',
			smooth: true,
			yAxisIndex: 1,
			data: [
			  3000.0,
			  4000,
			  4100,
			  2300,
			  3400,
			  3000.0,
			  4000,
			  4100,
			  2300,
			  3400,
			  4000,
			  4100,
			]
		  }
		]
	  };
	  myChart.setOption(option);
}
    //刷新myChart5数据
var myChart5 = echarts.init(document.getElementById('shengtailiuliang'));
init_myChart5();
leidatu();
shuiqing()
