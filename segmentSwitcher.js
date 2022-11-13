function segmentHandler(){
    segment1.print();
    segment2.print();
    
    if(segment1.detectAllCollision() || segment2.detectAllCollision()){
        player.color= "red";
    }
    if(player.y > segment2.score * 2000){
        segment1 = segment2;
        segment2.score +=2;
        segment2.add_obst();
    }
}