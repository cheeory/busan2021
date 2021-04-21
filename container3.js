// Build the chart
Highcharts.chart('container3', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#337cd2',
        borderRadius: 20,
        shadow: {
            color: 'rgba(0, 0, 0, 0.1)',
            offsetX: 1,
            offsetY: 1,
            opacity: '0.1',
            width: 10
        }
    },
    title: {
        text: '94.7%',
        align: 'center',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansMedium', fontSize: 30, color:'white'},
      },
      subtitle: {
        text: '부산 순유출 인구의<br>수도권으로 이동',
        align: 'center',
        verticalAlign: 'middle',
        style : {fontFamily:'GmarketSansLight', fontSize: 12, lineHeight: 65, color:'white'},
      },

    credits: {enabled: false},

    tooltip: {
        style : {fontFamily:'Noto Sans KR', fontSize: 14, lineHeight: 20},
        borderColor: '#555555',
        shadow: false,
        padding: 15,
        backgroundColor: 'white',
        pointFormat: '순유출 <b>{point.y}명</b>'
    },
    plotOptions: {
        pie: {
            size: '90%',
            colors: ['#FF8123','#fcb837','#00bdad','white'],
            borderWidth: 6,
            borderColor: '#337cd2',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [{
        innerSize: '70%',
        name: '',
        colorByPoint: true,
        data: [{
            name: '서울',
            y: 1319,
        }, {
            name: '수도권',
            y: 1212
        }, {
            name: '인천',
            y: 70
        }, {
            name: '기타',
            y: 145,
            sliced: true,
        }
    ]
    }]
});


// selected: true 계속 선택되어있게 하는거