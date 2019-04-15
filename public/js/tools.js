// requete pour récupérer les données pour le fichier "file"
function getData(file){
    $.ajax({
      url: 'data',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        drawGraph(data, 'chart_size');
      }
    })
}

// remplire la liste "files" avec les fichier de la source "src"
function loadFiles(src){
    $("#files").empty();
    $("#files").append("<div id='menu_title'>Fichiers</div>");
    $("#files").append("<div class='elem' onclick='backToSources()'><-- </div>");
    for(i in sources[src]){
        $("#files").append(File(sources[src][i]));
    }
    $('#sources').toggle("slow");
    $('#files').toggle("slow");
}

// retourner a la liste des sources
function backToSources(){
    $('#sources').toggle("slow");
    $('#files').toggle("slow");
}
// tracer les graphs
function drawGraph(data, div_id, title='Title', yAxisTitle=div_id, seriesName='Series'){
    Highcharts.chart(div_id, {
        chart: {
          type: 'arearange',
          zoomType: 'x',
          scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
          }
        },
  
        title: {
          text: title
        },
  
        xAxis: {
            title: {
                text: 'Date de réception'
              },
            type: 'datetime'
        },
  
        yAxis: {
          title: {
            text: yAxisTitle
          }
        },
  
        // tooltip: {
        //   crosshairs: true,
        //   shared: true,
        //   valueSuffix: '°C'
        // },
  
        legend: {
          enabled: false
        },
  
        series: [{
          name: seriesName,
          data: data
        }]
  
      });
};