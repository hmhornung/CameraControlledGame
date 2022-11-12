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
    //hand data
    handX = handData[0][0].x;
    handY = handData[0][0].y;
    ctx.beginPath();
    ctx.arc(gameCanvas.width - (handX * gameCanvas.width), (handY * gameCanvas.height), 50, 0, 2 * Math.PI);
    ctx.stroke();
    console.log(handX);

    handX = handData[1][0].x;
    handY = handData[1][0].y;
    ctx.beginPath();
    ctx.arc(gameCanvas.width - (handX * gameCanvas.width), (handY * gameCanvas.height), 50, 0, 2 * Math.PI);
    ctx.stroke();
    console.log(handX);
}