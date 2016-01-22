var width = 960;
var height = 500;
var numberOfEnemies = 30;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0," + height / 2 + ")");

var enemyMaker = function() {
    d3.select("g").append('circle')
    .attr('cx', Math.random() * width)
    .attr('cy', Math.random() * height)
    .attr('r', 20)
    .attr('fill','green');
  };

var intervalID = setInterval(function(){enemyMaker();}, 100);
