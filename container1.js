$(document).ready(function(){

    Highcharts.chart('container1', {
        chart: {type: 'area'},
        title: {text: ''},
        credits: {enabled: false},
        legend:{enabled:false},

        subtitle: {
            text: '매우 의향이 있다<br>어느정도 의향이 있다<br>보통이다',
            align: 'left',
            verticalAlign: 'middle',
            style : {fontFamily:'GmarketSansLight', fontSize: 16, color:'white', lineHeight: 125},
            x: 160,
            y: -18
          },

        xAxis: {
            categories: ['2015', '2017', '2019', '2020'],
            lineColor: 'transparent',
            tickmarkPlacement: 'on',
            title: {enabled: false},
            labels: {enabled: false}
        },
        yAxis: {
            gridLineColor: 'white',
            labels: {enabled: false},
            title: {enabled: false}
            
        },
        tooltip: {
            style : {fontFamily:'Noto Sans KR', fontSize: 14, lineHeight: 20},
            borderColor: '#555555',
            shadow: false,
            padding: 15,
            backgroundColor: 'white',
            pointFormat: '향후 부산 거주 의향<br>{series.name} <b>{point.percentage:.1f}%</b>',
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: 'white',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff',
                    fillColor: 'white',
                    symbol: 'circle',
                    enabled: false,
                    states: {hover: {enabled: true}}
                }
            }
        },
        series: [{
            name: '매우 그렇다',
            fillColor: '#337cd2',
            data: [15.9, 27.3, 31.2, 35.3]
        }, {
            name: '어느정도 그렇다',
            fillColor: '#36c6a8',
            data: [39.3, 43.6, 36.1, 38.4]
        }, {
            name: '보통이다',
            fillColor: '#fcb837',
            data: [31.9, 21.2, 23.9, 19.0]
        }, {
            name: '그렇지 않은 편이다',
            fillColor: '#FF8123',
            data: [7.9, 6.3, 7.0, 5.9]
        }, {
            name: '전혀 그렇지 않다',
            fillColor: '#FF4F39',
            data: [2.2, 1.6, 1.7, 1.5]
        }]
    });

})
