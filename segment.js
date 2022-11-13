class Segment{
    constructor(speed,current_map,next_map,score){
        this.speed = speed;
        this.current_map = current_map;
        this.next_map = next_map;
        this.score = score;
        this.obstacle = [];
    }
    print(){
        this.obstacle.foreach(element => console.log(element));
    }
    add_obst(obst){
        this.obstacle.append(obst);
        this.obstacle.append(null);
    }
}