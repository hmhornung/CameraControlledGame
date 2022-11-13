class Segment{
    constructor(speed,current_map,next_map,score){
        this.speed = speed;
        this.current_map = current_map;
        this.next_map = next_map;
        this.score = score;
        this.obstacle = [];
    }
    print(){
        for(var i = 0; i < 10; i++){
            //console.log(this.obstacle[i]);
            this.obstacle[i].print();
        }
    }
    add_obst(){
        this.obstacle = fillSegment(this.score);
    }

    detectAllCollision(){
        for(var i = 0; i < 10; i++){
            if (this.obstacle[i].getCollision()){
                return true;
            }
        }
        return false;
    }
}