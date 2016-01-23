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
    .attr('fill','red')
    .attr('cx', Math.random() * width)
    .attr('cy', Math.random() * height)
    .attr('r', 10);
  };

var dragMove = function() {
  d3.select(this)
  .attr('cx', d3.event.x)
  .attr('cy', d3.event.y);
};

var drag = d3.behavior.drag()
  .on("drag", dragMove);

var heroMaker = function() {
    d3.select("g").append('circle')
    .attr('class', 'hero')
    .attr('fill','green')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', 10)
    .call(drag);
  };

for (var i = 0; i < numberOfEnemies; i++) {
  enemyMaker();
}

heroMaker();

var enemyMover = function(enemyClass) {
  var enemies = d3.selectAll('.enemy');
  for ( var i = 0; i < enemies[0].length; i++){
    d3.select(enemies[0][i])
    .transition()
    .duration(2000)
    .attr('cx', Math.random() * width)
    .attr('cy', Math.random() * height);
  }
};

setInterval(function(){enemyMover();}, 2000);