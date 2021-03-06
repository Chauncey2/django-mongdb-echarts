/**
 * Created by kevin on 16/4/17.
 */
var outer = echarts.init(document.getElementById('outer'));
var outer_disk_type = echarts.init(document.getElementById('outer_disk_type'));
var outer_group_region = echarts.init(document.getElementById('outer_group_region'));
//var inner = echarts.init(document.getElementById('inner'));
var top_10_industry = echarts.init(document.getElementById('top_10_industry'));
var top_10_industry_memory_limit = echarts.init(document.getElementById('top_10_industry_memory_limit'));
var top_10_industry_disk_space = echarts.init(document.getElementById('top_10_industry_disk_space'));
var top_10_company = echarts.init(document.getElementById('top_10_company'));
var top_10_company_memory_limit = echarts.init(document.getElementById('top_10_company_memory_limit'));
var top_10_company_disk_space = echarts.init(document.getElementById('top_10_company_disk_space'));
var top_10_company_pure_increase_week = echarts.init(document.getElementById('top_10_company_pure_increase_week'));
var top_10_company_pure_delete_week = echarts.init(document.getElementById('top_10_company_pure_delete_week'));
//var one_one = echarts.init(document.getElementById('one_one'));
//var one_two = echarts.init(document.getElementById('one_two'));
var fish_bone_disk = echarts.init(document.getElementById('fish_bone_disk'));
var fish_bone_memory = echarts.init(document.getElementById('fish_bone_memory'));
var instance_pure_increase = echarts.init(document.getElementById('instance_pure_increase'));
var instance_pure_increase_ha = echarts.init(document.getElementById('instance_pure_increase_ha'));
// 二期需求开始

outer.showLoading();
outer_disk_type.showLoading();
outer_group_region.showLoading();
//inner.showLoading();
top_10_industry.showLoading();
top_10_industry_memory_limit.showLoading();
top_10_industry_disk_space.showLoading();
top_10_company.showLoading();
top_10_company_memory_limit.showLoading();
top_10_company_disk_space.showLoading();
top_10_company_pure_increase_week.showLoading();
top_10_company_pure_delete_week.showLoading();
//one_two.showLoading();
//one_one.showLoading();
fish_bone_disk.showLoading();
fish_bone_memory.showLoading();
instance_pure_increase.showLoading();
// 二期需求开始

$.get('/outer/').done(function (data) {
    var option = {
        title : {
            text: '外部DB类型 & 版本分布',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: data['data']
        },
        series: [
            {
                name: '数据库类型',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        show: false
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data['data1']
            },
            {
                name: 'MySQL是否高可用',
                type: 'pie',
                radius: ['45%', '65%'],

                label: {
                    normal: {
                        show: false
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },

                data: data['data2']
            },
            {
                name: '数据库版本',
                type: 'pie',
                radius: ['70%', '80%'],

                data: data['data3'],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // 构建自己想要的颜色库
                            var colorList = ['#C1232B','#B5C334','#FCCE10', '#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'];
                            return colorList[params.dataIndex]
                        }
                    }
                }
            }
        ]
    };
    outer.setOption(option);
    outer.hideLoading();
});

$.get('/outer_disk_type/').done(function (data) {
    var option = {
        title : {
            text: '磁盘类型',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: data['data']
        },
        series: [
                    {
                        name: '磁盘类型',
                        type: 'pie',
                        radius : '55%',
                        //center: ['50%', '60%'],
                        data: data['data1'],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
    };
    outer_disk_type.setOption(option);
    outer_disk_type.hideLoading();
});

$.get('/outer_group_region/').done(function (data) {
    var option = {
        title : {
            text: '可用区 & 机房',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: data['data']
        },
        series: [
            {
                name: '可用区',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '40%'],

                label: {
                    normal: {
                        show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data['data1']
            },
            {
                name: '机房',
                type: 'pie',
                radius: ['45%', '60%'],

                //label: {
                //    normal: {
                //        position: 'inner'
                //    }
                //},

                data: data['data2']
            }
        ]
    };
    outer_group_region.setOption(option);
    outer_group_region.hideLoading();
});

//
//$.get('/inner/').done(function (data) {
//    var option = {
//        title : {
//            text: '内部DB类型与版本分布',
//            //subtext: '纯属虚构',
//            x:'center'
//        },
//        tooltip: {
//            trigger: 'item',
//            formatter: "{a} <br/>{b}: {c} ({d}%)"
//        },
//        legend: {
//            orient: 'vertical',
//            x: 'left',
//            y: 'bottom',
//            data: data['data']
//        },
//        series: [
//            {
//                name: '数据库类型',
//                type: 'pie',
//                selectedMode: 'single',
//                radius: [0, '40%'],
//
//                label: {
//                    normal: {
//                        position: 'inner'
//                    }
//                },
//                labelLine: {
//                    normal: {
//                        show: false
//                    }
//                },
//                data: data['data1']
//            },
//            {
//                name: 'MySQL是否高可用',
//                type: 'pie',
//                radius: ['45%', '65%'],
//
//                label: {
//                    normal: {
//                        position: 'inner'
//                    }
//                },
//
//                data: data['data2']
//            },
//            {
//                name: '数据库版本',
//                type: 'pie',
//                radius: ['70%', '80%'],
//
//                data: data['data3'],
//                itemStyle: {
//                    normal: {
//                        color: function(params) {
//                            // 构建自己想要的颜色库
//                            var colorList = ['#C1232B','#B5C334','#FCCE10', '#E87C25','#27727B','#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD', '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'];
//                            return colorList[params.dataIndex]
//                        }
//                    }
//                }
//            }
//        ]
//    };
//    topright.setOption(option);
//    topright.hideLoading();
//});

// 行业
$.get('/top_10_industry_count/').done(function (data) {
    var option = {
        title : {
            text: '实例数量前十的行业（DB版本/磁盘类型分布，请点击相应扇图）',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (个)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: data['data']
        },
        series: [
            {
                name: '行业',
                type: 'pie',
                selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_industry.setOption(option);
    top_10_industry.hideLoading();
});

$.get('/top_10_industry_memory_limit/').done(function (data) {
    var option = {
        title : {
            text: '内存总量前十的行业 (GB)',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (GB)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: data['data']
        },
        series: [
            {
                name: '行业',
                type: 'pie',
                //selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_industry_memory_limit.setOption(option);
    top_10_industry_memory_limit.hideLoading();
});

$.get('/top_10_industry_disk_space/').done(function (data) {
    var option = {
        title : {
            text: '磁盘总量前十的行业 (TB)',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (TB)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: data['data']
        },
        series: [
            {
                name: '行业',
                type: 'pie',
                //selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_industry_disk_space.setOption(option);
    top_10_industry_disk_space.hideLoading();
});

// 公司
$.get('/top_10_company_count/').done(function (data) {
    var option = {
        title : {
            text: '实例数量前十的公司（DB版本/磁盘类型分布，请点击相应扇图）',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (个)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom',
            data: data['category'],
            textStyle: {
                //fontSize: 9,
                //fontStyle: 'italic'
            }
        },
        series: [
            {
                name: '公司',
                type: 'pie',
                selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_company.setOption(option);
    top_10_company.hideLoading();
});

$.get('/top_10_company_memory_limit/').done(function (data) {
    var option = {
        title : {
            text: '内存总量前十的公司 (GB)',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (GB)"
        },
        //legend: {
        //    orient: 'vertical',
        //    x: 'left',
        //    y: 'bottom',
        //    data: data['category'],
        //    textStyle: {
        //        fontSize: 9,
        //        //fontStyle: 'italic'
        //    }
        //},
        //grid: {
        //    left: '30%',
        //    right: '4%',
        //    bottom: '3%',
        //    containLabel: false
        //},
        series: [
            {
                name: '公司',
                type: 'pie',
                //selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_company_memory_limit.setOption(option);
    top_10_company_memory_limit.hideLoading();
});

$.get('/top_10_company_disk_space/').done(function (data) {
    var option = {
        title : {
            text: '磁盘总量前十的公司 (TB)',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (TB)"
        },
        //legend: {
        //    orient: 'vertical',
        //    x: 'right',
        //    y: 'bottom',
        //    data: data['category'],
        //    textStyle: {
        //        //fontSize: 9,
        //        //fontStyle: 'italic'
        //    }
        //},
        series: [
            {
                name: '公司',
                type: 'pie',
                //selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_company_disk_space.setOption(option);
    top_10_company_disk_space.hideLoading();
});

$.get('/top_10_company_pure_increase_week/').done(function (data) {
    var option = {
        title : {
            text: '上周净创建前十的公司 (个)',
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (个)"
        },
        //legend: {
        //    orient: 'vertical',
        //    x: 'right',
        //    y: 'bottom',
        //    data: data['category'],
        //    textStyle: {
        //        //fontSize: 9,
        //        //fontStyle: 'italic'
        //    }
        //},
        series: [
            {
                name: '公司',
                type: 'pie',
                //selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_company_pure_increase_week.setOption(option);
    top_10_company_pure_increase_week.hideLoading();
});

$.get('/top_10_company_pure_delete_week/').done(function (data) {
    var option = {
        title : {
            text: '上周删除前十的公司 (个)',
            subtext: '只统计存续大于一天的实例',
            x:'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} (个)"
        },
        //legend: {
        //    orient: 'vertical',
        //    x: 'right',
        //    y: 'bottom',
        //    data: data['category'],
        //    textStyle: {
        //        //fontSize: 9,
        //        //fontStyle: 'italic'
        //    }
        //},
        series: [
            {
                name: '公司',
                type: 'pie',
                //selectedMode: 'single',
                radius: ['30%', '60%'],

                label: {
                    normal: {
                        //show: false,
                        //position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data: data['data1']
            }
        ]
    };
    top_10_company_pure_delete_week.setOption(option);
    top_10_company_pure_delete_week.hideLoading();
});

//$.get('/one_one/').done(function (data) {
//    var option = {
//        // 例子：柱状图的每个柱子、饼图的每个扇形
//        itemStyle: {
//            // 正常展示下的样式
//            normal: {
//                color: 'green'
//            },
//            // 鼠标放上去的样式
//            emphasis: {
//                color: 'black'
//            }
//        },
//        title: {
//            text: data['title']
//        },
//        tooltip: {},
//        legend: {
//            data: ['数量']
//        },
//        grid: {
//            left: '3%',
//            right: '4%',
//            bottom: '3%',
//            containLabel: true
//        },
//        xAxis: {
//            data: data['field_list']
//        },
//        yAxis: {},
//        series: [{
//            name: data['series_name'],
//            type: 'bar',
//            data: data['count_list']
//        }]
//    };
//    one_one.hideLoading();
//    one_one.setOption(option);
//});

//$.get('/one_two/').done(function (data) {
//    var option = {
//        title: {
//            text: data['title']
//        },
//        tooltip: {},
//        legend: {
//            data: ['数量']
//        },
//        grid: {
//            left: '3%',
//            right: '4%',
//            bottom: '3%',
//            containLabel: true
//        },
//        xAxis: {
//            //data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//            data: data['field_list']
//        },
//        yAxis: {},
//        series: [{
//            name: data['series_name'],
//            type: 'bar',
//            //data: [5, 20, 36, 10, 10, 20]
//            data: data['count_list']
//        }]
//    };
//    one_two.hideLoading();
//    one_two.setOption(option);
//});

$.get('/fish_bone_memory/').done(function (data) {
    var option = {
        title : {
            text: data['title'],
            subtext: '数据为最近6个月',
            x:'left'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['净增', '创建', '删除']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : data['y']
            }
        ],
        series : [
            {
                name:'净增',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:data['data3']
            },
            {
                name:'创建',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:data['data1']
            },
            {
                name:'删除',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:data['data2']
            }
        ]
    };

    fish_bone_memory.hideLoading();
    fish_bone_memory.setOption(option);
});

$.get('/fish_bone_disk/').done(function (data) {
    var option = {
        title : {
            text: data['title'],
            subtext: '数据为最近6个月',
            x:'left'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['净增', '创建', '删除']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : data['y']
            }
        ],
        series : [
            {
                name:'净增',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:data['data3']
            },
            {
                name:'创建',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:data['data1']
            },
            {
                name:'删除',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:data['data2']
            }
        ]
    };

    fish_bone_disk.hideLoading();
    fish_bone_disk.setOption(option);
});

function get_instance_pure_increase(button) {
    instance_pure_increase.showLoading();
    $.get('/instance_pure_increase/', {'time_grading': button.name}).done(function (data) {
        var option = {
            title: {
                text: data['title'],
                subtext: '粒度包括最近12个月/最近15周/最近30天'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:data['legend'],
                selectedMode: 'single',
                selected: {
                    '存量': true
                }
            },
            toolbox: {
                show: true,
                feature: {
                    //dataZoom: {},
                    //dataView: {readOnly: false},
                    magicType: {type: ['bar', 'line']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: data['xAxis']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            series: [
                {
                    name:'申请',
                    type:'line',
                    smooth:true,
                    data:data['data1'],
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                {
                    name:'删除',
                    type:'line',
                    smooth:true,
                    data:data['data2'],
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                {
                    name:'净增',
                    type:'line',
                    smooth:true,
                    data:data['data3'],
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                },
                {
                    name:'存量',
                    type:'line',
                    smooth:true,
                    data:data['data4'],
                    //markLine: {
                    //    data: [
                    //        {type: 'average', name: '平均值'}
                    //    ]
                    //}
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }
            ]
        };

        instance_pure_increase.hideLoading();
        instance_pure_increase.setOption(option);
    });
}

get_instance_pure_increase({'name': 'month'});

// 点击事件在beta.js