

class Obstacle{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.type = parseInt(Math.random() * 3 + 1);
        this.color = "black";
        switch(this.type){
            case 1: // collision
                this.length = parseInt(Math.random() * 500 + 1);
                this.color = "orange";
                break;
            case 2: // jump type
                this.length = 50;
                this.color = "yellow";
                break;
            case 3: //duck
                this.length = parseInt(Math.random() * 150 + 100);
                this.color = "pink";
                break;
        }
        //this.length = 100;
    }
    
    // constructor(x,y,type){
    //     this.x = x;
    //     this.y = y;
    //     this.type = type;
    //     switch(this.type){
    //         case 1: // collision
    //             this.length = math.random() * 500 + 1;
    //             break;
    //         case 2: // jump type
    //             this.length = 50;
    //             break;
    //         case 3:
    //             this.length = Math.random() * 150 + 1;
    //             break;
    //     }
    // }
    // constructor(x,y,type,length){
    //     this.x = x;
    //     this.y = y;
    //     this.type = type;
    //     this.length = length;
    // }

    print(){
        //console.log("called");
        
        ctx.fillStyle = this.color;
        //console.log((this.x - 1) * (gameCanvas.width / 3));
        //console.log(player.y-this.y);
        //console.log((gameCanvas.width / 3));
        //console.log(this.length);
        //console.log("type: " + this.type);
        ctx.fillRect((this.x - 1) * (gameCanvas.width / 3), player.y - this.y, (gameCanvas.width / 3), this.length);
    }

    getCollision(){
        if(player.x != this.x){
            return false;
        }
        else if (player.y >= this.y && player.y <= this.y + this.length){
            return true;
        }
    }

    

}