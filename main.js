function getParagraph1(){
    var inputs=[];
    for(var i = 1; i <= 6; i++){
    inputs.push(document.getElementById("para_1_input_" + i).value);
    }
    inputs.join(". ");
    document.getElementsById("showParagraph1").innerHTML=inputs.join(". ");
}
function getParagraph2(){
    var inputs=[];
    for(var i = 1; i <= 6; i++){
    inputs.push(document.getElementById("para_2_input_" + i).value);
    }
    inputs.join(". ");
    document.getElementsById("showParagraph2").innerHTML=inputs.join(". ");
}