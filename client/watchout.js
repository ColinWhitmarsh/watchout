var width = 960;
var height = 500;
var numberOfEnemies = 30;
var currentScore = 0;
var highScore = 0;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(0,0)");


d3.select("svg").append("defs")
  .append('pattern')
  .attr('id', 'asteroid')
  .attr('patternUnits', 'objectBoundingBox')
  .attr('width', 20)
  .attr('height', 20)
  .append("image")
  .attr("xlink:href", "asteroid.png")
  .attr('width', 20)
  .attr('height', 20);

d3.select("defs").append("pattern")
  .attr('id', 'mike')
  .attr('patternUnits', 'objectBoundingBox')
  .attr('width', 20)
  .attr('height', 20)
  .append("image")
  .attr("xlink:href", "mike.jpeg")
  .attr('width', 20)
  .attr('height', 20);

var enemyMaker = function() {
    d3.select("g").append('circle')
    .attr('class', 'enemy')
    .attr('fill','red')
    .attr('cx', Math.random() * width)
    .attr('cy', Math.random() * height)
    .attr('r', 10)
    .attr('fill', "url(#asteroid)");
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
    .attr('fill', 'url(#mike)')
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

var hero = d3.select(".hero");

var checkCollision = function (collidedCallback) {
  var enemies = d3.selectAll('.enemy');
  var hero = d3.selectAll('.hero');
  for (var i = 0; i < enemies[0].length; i++) {
    var enemy = d3.select(enemies[0][i]);
    radiusSum = parseFloat(enemy.attr('r')) + parseFloat(hero.attr('r'));
    xDiff = parseFloat(enemy.attr('cx')) - parseFloat(hero.attr('cx'));
    yDiff = parseFloat(enemy.attr('cy')) - parseFloat(hero.attr('cy'));
    separation = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    // debugger;
    if (separation < radiusSum) {
      console.log('onCollision');
      currentScore = 0;
    }
  }
};

setInterval(function(){ 
  d3.select(".current").text(currentScore);
  d3.select(".highscore")
  .text(function() { return currentScore > highScore ? highScore = currentScore : highScore; });
  currentScore++;
 }, 100);

setInterval(function(){checkCollision();}, 100);
















