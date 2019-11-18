document.getElementById('circle').addEventListener("click", changeColorFunc);
document.getElementById("test").addEventListener("click", updateTextFunc);
document.getElementById("makeCircle").addEventListener("click", createButton);
document.getElementById("makeCircle").addEventListener("click", updateCircleText);

var circleGenerated = false;

function changeColorFunc() {
    var canvas = document.getElementById('circle');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var x = canvas.width/2;
        var y = canvas.height/2;
        var r = 30;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI, false);
        ctx.lineWidth = 3;
        ctx.lineStroke = "#FF0000";
        ctx.stroke();
    }
}

function updateTextFunc(){
    document.getElementById("test").innerHTML = "CLICKED";
}

function updateCircleText(){
    if (circleGenerated){
        document.getElementById("makeCircle").innerHTML = "click to delete the circle";
    }else{
        document.getElementById("makeCircle").innerHTML = "click to generate a circle";
    }
}
function createButton(){
    var canvas = document.getElementById('circle');
    if (circleGenerated){
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        circleGenerated = false;
    }else{
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');
            var x = canvas.width/2;
            var y = canvas.height/2;
            var r = 30;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2*Math.PI, false);
            ctx.lineWidth = 3;
            ctx.lineStroke = '#FFFFFF';
            ctx.stroke();
            circleGenerated = true;
        }
    }
    console.log(circleGenerated);
}

function dataNode(date, location, )
