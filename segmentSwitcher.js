function segmentHandler(){
    if(!segment1.detectAllCollision() && !segment2.detectAllCollision()){
        segment1.print();
        segment2.print();
    }
    if(player.y > segment2.score * 2000){
        segment1 = segment2;
        segment2.score +=2;
        segment2.add_obst();
    }
}