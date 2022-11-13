//canvas for the Game
const gameCanvas = document.getElementsByClassName('game_canvas')[0];
const ctx = gameCanvas.getContext('2d');

var obs1 = new Obstacle(2,100);
var segment1 = new Segment(1,true,false,0);
var segment2 = new Segment(1,false,true,1);


setInterval(function(){
    ctx.clearRect(0,0,gameCanvas.width,gameCanvas.height);
    map.print(ctx,back_image);
    map.update();
    printAll(ctx);
    
    //preDraw();
    //draw();
    //postDraw();
    // console.log(handData);
    console.log(bodyData);

    //ctx.fillStyle = "red";
    //ctx.fillRect(50,50, 100, 100);
    
}, 20);

// function draw(){ // function for drawing hand circles
//     //hand data
//     //handX = handData[0][0].x;
//     //handY = handData[0][0].y;
//     handX = bodyData[20].x;
//     handY = bodyData[20].y;

//     ctx.beginPath();
//     ctx.arc(gameCanvas.width - (handX * gameCanvas.width), (handY * gameCanvas.height), 50, 0, 2 * Math.PI);
//     ctx.stroke();
//     console.log(handX);

//     //handX = handData[1][0].x;
//     //handY = handData[1][0].y;
//     handX = bodyData[19].x;
//     handY = bodyData[19].y;

//     ctx.beginPath();
//     ctx.arc(gameCanvas.width - (handX * gameCanvas.width), (handY * gameCanvas.height), 50, 0, 2 * Math.PI);
//     ctx.stroke();
//     console.log(handX);
// }
