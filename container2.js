$(document).ready(function(){
    
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    Highcharts.chart('container2', {
        chart: {type: 'area'},
        title: {text: ''},
        credits: {enabled: false},
        legend:{ enabled:false },
        //끝

        title: {
            text: '1994',
            verticalAlign: 'middle',
            style : {fontFamily:'GmarketSansMedium', fontSize: 30, color:'white'},
            x: -395,
            y: 220
          },
          subtitle: {
            text: '2020',
            verticalAlign: 'middle',
            style : {fontFamily:'GmarketSansMedium', fontSize: 30, color:'white'},
            x: 395,
            y: 220
          },
          

        xAxis: {
            allowDecimals: false,
            tickWidth: 0,
            labels: {enabled: false},
        },
        yAxis: {
            plotLines: [{
                value: 3500000,
                color: 'rgba(255,255,255, 0.6)',
                width: 1,
                dashStyle: 'Solid',
                label: {
                    x: 650,
                    y: 20,
                    style : {fontFamily:'GmarketSansLight', fontSize: 16, color: 'white', margin: 20},
                    formatter: function () {
                        return '2018년, 350만 붕괴';
                    }
                },
                zIndex: 5
            }],
            title: {text: ''},
            floor: 3000000,
            gridLineColor: '#ffffff',
            labels: {enabled: false}
        },

        tooltip: {
            style : {fontFamily:'Noto Sans KR', fontSize: 14, lineHeight: 20},
            headerFormat: undefined,
            borderColor: '#ff5520',
            shadow: false,
            padding: 20,
            backgroundColor: 'white',
            pointFormat: '{point.x}년 주민등록 수<br/><b>{point.y}명</b>'
    },
            
        plotOptions: {
            area: {
                pointStart: 1994,
                marker: {
                    enabled: false,
                    states: {hover: {enabled: true}},
                    symbol: 'circle',
                    radius: 2,
                    fillColor: '#ff5520'
                }
            }
        },
        series: [{
            name: '연도별 부산광역시 인구 변동 추이',
            lineColor: "#FF3F27",
            color: '#FF3F27',

            data: [3845644, 3892972, 3878918, 3865114, 3842834, 3831454, 3812392, 3786033, 3747369, 3711268, 3684153, 3657840, 3635389, 3615101, 3596063, 3574340, 3600381, 3586079, 3573533, 3563578, 3557716,
                3559780, 3546887, 3520306, 3494019, 3466563, 3438710
            ]
        }
    ]
    });
   
})