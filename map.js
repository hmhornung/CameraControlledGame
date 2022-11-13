//canvas for the Game
const gameCanvas = document.getElementsByClassName('game_canvas')[0];
const ctx = gameCanvas.getContext('2d');
const image = document.getElementById("backgroundImage");
ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);


// class Background{
//     constructor(gameWidth,gameHeight){
//         this.gameWidth = gameWidth;
//         this.gameHeight = gameHeight;
//         this.image = document.getElementById("backgroundImage")
//         this.x = 0;
//         this.y = 0;
//         this.width = 2400;
//         this.height = 720;
//     }
//     draw2(context){
//         context.drawImage(this.image,this.x,this.y);
//     }
// }

// const background = new Background(gameCanvas.width,gameCanvas.height);
// background.draw2(ctx);