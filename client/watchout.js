var width = 960;
var height = 500;
var numberOfEnemies = 30;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");

var enemyMaker = function() {
    d3.select("g").append('circle')
    .attr('class', 'enemy')
    .attr('cx', Math.random() * width)
    .attr('cy', Math.random() * height)
    .attr('r', 10)
    .attr('fill','green');
  };

for ( var i = 0; i < numberOfEnemies; i++){
  enemyMaker(i);
}


var enemyMover = function(enemyClass) {
  var enemies = d3.selectAll('.enemy');
  console.log(enemies[0].length);

  for ( var i = 0; i < enemies[0].length; i++){
    d3.select(enemies[0][i])
    .transition()
    .duration(2000)
    .attr('cx', Math.random() * width)
    .attr('cy', Math.random() * height);
  }
};

setInterval(function(){enemyMover();}, 2000);
