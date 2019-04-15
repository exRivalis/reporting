function Source(name){
    var div = "<div class='elem' onclick='loadFiles(\""+name+"\")'>"+name+"</div>";
    return div;
}

function File(file){
    var div = "<div class='elem' onclick='getData(\""+file+"\")'>"+file+"</div>";
    return div;
}
