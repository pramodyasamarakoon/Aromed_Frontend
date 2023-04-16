import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { merge } from 'lodash'

const defaultOptionLineChart = {
    grid: {
        top: 48,
        left: 36,
        right: 16,
        bottom: 80,
    },
    legend: {},
    tooltip: {
        trigger: 'axis'
    },
    series: [
        {
            //areaStyle: {},
            label: {
                show: true,
                position: 'top'
            },
            smooth: true,
            lineStyle: {
                width: 2,
                color: 'blue',
            },
        },
    ],
    xAxis: {
        show: true,
        type: 'category',
        showGrid: true,
        boundaryGap: false,
        axisLabel: {
            color: 'black',
            margin: 20,
        },
        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
        nameLocation: 'middle',
        nameTextStyle: {
            fontSize: 14,
            padding: [24, 0, 0, 0],
            textAlign: 'center'
        }
    },
    yAxis: {
        // type: 'value',
        //min: 10,
        //max: 60,
        axisLabel: {
            color: 'black',
            margin: 20,
            fontSize: 13,
            fontFamily: 'roboto',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, .1)',
            },
        },

        axisLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
    },
}


const defaultOptionsFunction = (type) => {
    let defaultOptions = null;

    return defaultOptionLineChart;
}


const loadData = (type, data, xData, yData) => {
    let option = null;
    if (type == 'line') {
        option = {
            title: {
                text: 'Appointment Revenue for Last Week',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: xData,
                name: 'Days of the week',
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 14,
                    padding: [36, 0, 0, 0],
                    textAlign: 'center'
                }
            },
            yAxis: {
                type: 'value',
                name: 'Revenue ($)',
            },
            series: [
                {
                    name: 'Revenue',
                    data: yData,
                    type: 'line',
                    lineStyle: {
                        width: 2,
                        color: 'blue',
                    },
                    label: {
                        show: true,
                        position: 'top'
                    },
                },

            ]
        }

    }
    if (type == 'bar') {
        option = {
            title: {
                text: 'Sales Comparison'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                name: 'Days of the week'
            },
            yAxis: {
                type: 'value',
                name: 'Number of sales'
            },
            series: [
                {
                    name: 'A',
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    lineStyle: {
                        width: 2,
                        color: '#4278f5',
                    },
                    label: {
                        show: true,
                        position: 'top'
                    },
                },
                {
                    name: 'B',
                    data: [125, 200, 145, 30, 170, 10, 140],
                    type: 'bar',
                    lineStyle: {
                        width: 2,
                        color: 'red',
                    },
                    label: {
                        show: true,
                        position: 'top'
                    },
                }

            ]
        }

    }


    return option;

}


const RevenueChart = ({ height, type, data, xData, yData,  className }) => {
    let option = loadData(type, data, xData, yData)
    return (
        <ReactEcharts
            className={className}
            style={{ height: height }}
            option={merge({}, defaultOptionsFunction, option)}
        />
    )
}

export default RevenueChart
