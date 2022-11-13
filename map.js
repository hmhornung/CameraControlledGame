var map = {
    x: 0,
    y: 0,
    speed: 2,
    print(ctx,image){
        ctx.drawImage(image,this.x,this.y, gameCanvas.width,gameCanvas.height);
        ctx.drawImage(image,this.x,this.y-gameCanvas.height, gameCanvas.width,gameCanvas.height);
    },
    update(){
        this.y+=this.speed;
        if (this.y > 0+gameCanvas.height) this.y=0;
    }
}