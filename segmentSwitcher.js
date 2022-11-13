function segmentHandler(){
    segment1.print();
    segment2.print();
    
    if(segment1.detectAllCollision()){
        player.color= "red";
        player.lives-=1;
        console.log("ouch")
    }
    if(player.y > segment2.score * 1000){
        segment1 = segment2;
        segment2.score +=2;
        segment2.add_obst();
    }
}