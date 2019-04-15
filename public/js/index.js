// contient la liste des sources et les fichiers de chaque source
var sources = undefined;

$(document).ready(() => {
  // $("#back_btn").bind("click", () => {
  //   console.log('click');
  //   $('#sources').toggle("slow");
  //   $('#files').toggle("slow");
  // })

  // when ready load list of sources & files and show sources
  $.ajax({
    url: 'sources',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      loadSources(data)
    }
  })

  drawGraph([], 'chart_size');
  drawGraph([], 'chart_time');
});

function loadSources(data){
  $("#sources").append("<div id='menu_title'>Sources</div>");
  sources = data.sources;
  for(source in data.sources){
    $("#sources").append(Source(source));
  }
}

list = {'sources':{'src_1':['file_1', 'file_2', 'file_3'], 'src_2':['file_1', 'file_2', 'file_3'],
                  'src_3':['file_1', 'file_2', 'file_3'], 'src_4':['file_1', 'file_2', 'file_3'],
                  'src_5':['file_1', 'file_2', 'file_3'], 'src_6':['file_1', 'file_2', 'file_3'],
                  'src_7':['file_1', 'file_2', 'file_3'], 'src_8':['file_1', 'file_2', 'file_3'],
}};


// $.getJSON(
//     'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/range.json',
//     // './data/times.json',
//     function (data) {
//       drawGraph(data)
//     }  
//   );
// var json = $.getJSON("data/times.json");
// $.getJSON("./data/times.json", function(data) {
  // console.log(data);
  // data is a JavaScript object now. Handle it as such

// });