document.addEventListener('DOMContentLoaded', () =>{
    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: 'June 2021 Scrobbles'
        },
        yAxis: {
            title: {
                text: 'Amount'
   
            }
        }
       };
       $.get('test.csv', csv => {
           options.data = {
               csv
           };
           Highcharts.chart('container', options);
       });
    });