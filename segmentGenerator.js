function fillSegment(num){
    y = 0

    var obstacleList = [];
    for(i = 0; i < 10; i++){
        var obst = new Obstacle(Math.random() * 3 + 1, y + num * 2000)
        obstacleList.push(obst)
        y += obst.length + 20;

    }
    return obstacleList;
}