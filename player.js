var player = {
    x: 1,
    y: -700,
    speed: 2,
    printX:100,//gameCanvas.width - ((gameCanvas.width / 3) * this.x),
    printY: 100,
    width: 50,
    color: "green",
    print(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.printX,this.printY, this.width, this.width);
        //console.log(ctx);
    },

    update(){
        this.y += this.speed;
        this.x = 3 - parseInt(((bodyData[24].x + bodyData[23].x) / 2.0)*3) ;
        console.log(this.x)
        this.printX = (gameCanvas.width / 3) * (this.x-1) + ((gameCanvas.width / 3) - this.width)/2 //(this.width/2);
    }
};