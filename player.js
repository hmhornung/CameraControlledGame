var player = {
    x: 1,
    y: 0,
    printX:100,//gameCanvas.width - ((gameCanvas.width / 3) * this.x),
    printY: 50,
    width: 100,
    print(ctx){
        //ctx.fillStyle = "red";
        ctx.fillRect(this.printX,this.printY, this.width, this.width);
        //console.log(ctx);
    },

    update(){
        
        x = 3 - parseInt(bodyData[24].x*3) ;
        console.log(x)
        this.printX = gameCanvas.width - ((gameCanvas.width / 3) * x) - (this.width/2);
    }
};