function fillSegment(num){
    y = 0

    var obstacleList = [];
    for(i = 0; i < 100; i++){
        var obst = new Obstacle(parseInt(Math.random() * 3 + 1), y + (num * 2000))
        obstacleList.push(obst)
        y += (obst.length + 110);

    }
    return obstacleList;
}