let Buttons=["Draggable","Droppable","Resizable","Selectable","Sortable"];
let Divs=["orange draggable","lightblue draggable","lightseagreen draggable","car","bike"];

$(document).ready(function(){
    $.each(Buttons,function (index,element) {
        let input=$("<input>")
            .attr({"type":"button","value":element})//il testo del button è element,ovvero il testo dell'array buttons
            .addClass("menuButtons")
            .attr("onclick",element+"(this)");//ho creato una funzione che ha come nome element(this)
        $(".menu").append(input);
    });//ho creato i bottoni sulla sinistra
    $.each(Divs,function (index,element) {
        let div=$("<div></div>")
            .addClass(element)
            .attr("id","div"+index);
        $(".main").append(div);
    });
    $(".footer")
        .append("<div id='divList'></div><div id='outData'></div>")
        .append("<div id='divSort'></div>");
    $("#divList").append("<ul id='list'></ul>");
    for(let index=1;index <6;index++){
        $("#list").append("<li>"+"index"+index.toString()+"</li>");
    }
    $("#divSort").append("<ul id='sort'></ul>");
    for(let index=1;index<10;index++){
        $("#sort").append("<li>"+index.toString()+"</li>");
    }

});
function Draggable(e){
    if($(".draggable").draggable("instance")) { //verifica se c'è una instanza
         $(".draggable").draggable("destroy");
         $(".car, .bike").draggable("destroy");
        $(e).css({"background-color":"#f0f0f0"});
    }
    else{
        $(".draggable").draggable({"containment":".main"});
        $(".car,.bike").draggable();
        $(e).css({"background-color":"#fcefa1"});
        $(".draggable, .car, .bike").draggable("disable");
        setTimeout(function () {
           $(".draggable, .car, .bike").draggable("enable");
        },5000);
    }
}
function Droppable(e) {
    if($(".droppable").droppable("instance")){
        $(".droppable, #carpark, #bikepark").droppable("destroy");
        $(e).css({"background-color":"#f0f0f0"});
    }
    else{
        $(".droppable").droppable({
            drop: function (event,ui) {$("#caption p").html("rilasciato correttamente") },
            over: function (event,ui) {$("#caption p").html("sulla superficie");},
            out: function (event,ui) {$("#caption p").html("non in area!");}
        });
        $("#carpark").droppable({
            accept:".car", //accetta solo elementi con classe car
            drop:function(event,ui){$(this).css("background-color","lightgreen")},
            out:function(event,ui){$(this).css("background-color","")}
        });
        $("#bikepark").droppable({
            accept:".bike",
            drop:function(event,ui){$(this).css("background-color","lightgreen")},
            out:function(event,ui){$(this).css("background-color","")}
        });
        $(e).css({"background-color":"#fcefa1"});
        $(".draggable").draggable("option","containment","document"); //option permettere di accedere in lettura e scrittura ai vari parametri
        }
}
function Resizable(e){
    if ($("#div1").resizable("instance")){
        $("#div1").resizable("destroy");
        $(e).css({"background-color":"#f0f0f0"});

    }else{
        $("#div1").resizable({
            animate:true,
            helper:"helper"

        });
        $(e).css({"background-color":"#fcefa1"});
    }
}
function Selectable(e){
    if($("#list").selectable("instance")){
        $("#list").selectable("destroy");
        $(e).css({"background-color":"#f0f0f0"});
    }
    else{
        $("#list").selectable({
            selected:function(event,ui){
                let select=$(".ui-selected").length;
                $("#outData").html(select.toString())
            }
        });
        $(e).css({"background-color":"#fcefa1"});
    }
}
function Sortable(e){
    if($("#sort").sortable("instance")){
        $("#sort").sortable("destroy");
        $(e).css({"background-color":"f0f0f0"});
    }
    else{
        $("#sort").sortable({"containment":"#divSort"});
        $(e).css({"background-color":"#fcefa1"});
    }
}





