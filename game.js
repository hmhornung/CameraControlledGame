//canvas for the Game
const gameCanvas = document.getElementsByClassName('game_canvas')[0];
const ctx = gameCanvas.getContext('2d');



setInterval(function(){
    ctx.clearRect(0,0,gameCanvas.width,gameCanvas.height);
    
    preDraw();
    draw();
    postDraw();
    console.log(handData);
    console.log(bodyData);
    
}, 20);

function draw(){
    //hand
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}