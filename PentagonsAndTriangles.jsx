PentagonsAndTriangles = React.createClass({

    drawTiling: function() {

	 
  	var width = 800;
	var height = 500;
	var monsterColour = "rgb(254, 111, 94)";
	var decagonColour = "rgb(176,224,230)";
	var pentagonColour = "rgb(102,153,204)";
	var pentacleColour = "rgb(255,3,62)";

	var svg = d3.select("#pentagonsandtriangles")
		.attr("width", width)
		.attr("height", height);

	//first motif test

	svg.append("svg:polygon")
	    .attr("id", "hexagon1")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(6,200, 200, 25))
//	    .attr("transform", " rotate(54," + 850/2.4 + "," + 600/2.4 + ") scale(0.4,0.4) translate(240,-45)")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", pentacleColour);

	var tradius = 50;

	var t1x = 175;
	var t1y = 250;

	svg.append("svg:polygon")
	    .attr("id", "triangle1")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t1x, t1y,tradius))
	    .attr("transform", " rotate(30," + t1x + "," + t1y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	.attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t2x = 230.5;
	var t2y = 246;
	var t2rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle2")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t2x, t2y,tradius))
	    .attr("transform", " rotate(" + t2rot + "," + t2x + "," + t2y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t3x = 256;
	var t3y = 196;
	var t3rot = 30;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle3")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t3x, t3y,tradius))
	    .attr("transform", " rotate(" + t3rot + "," + t3x + "," + t3y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t4x = 225;
	var t4y = 150;
	var t4rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle4")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t4x, t4y,tradius))
	    .attr("transform", " rotate(" + t4rot + "," + t4x + "," + t4y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t5x = 169.5;
	var t5y = 153.5;
	var t5rot = 30;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle5")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t5x, t5y,tradius))
	    .attr("transform", " rotate(" + t5rot + "," + t5x + "," + t5y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t6x = 144;
	var t6y = 203.5;
	var t6rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle6")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t6x, t6y,tradius))
	    .attr("transform", " rotate(" + t6rot + "," + t6x + "," + t6y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

 // second motif test

	svg.append("svg:polygon")
	    .attr("id", "hexagon1")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(6,400, 200, 25))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", pentacleColour);

	var tradius = 37.5;

	var t1x = 175 + 200;
	var t1y = 237.5;

	svg.append("svg:polygon")
	    .attr("id", "triangle1")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t1x, t1y,tradius))
	    .attr("transform", " rotate(30," + t1x + "," + t1y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	.attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t2x = 219.5 + 200;
	var t2y = 240;
	var t2rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle2")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t2x, t2y,tradius))
	    .attr("transform", " rotate(" + t2rot + "," + t2x + "," + t2y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t3x = 245 + 200;
	var t3y = 202.5;
	var t3rot = 30;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle3")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t3x, t3y,tradius))
	    .attr("transform", " rotate(" + t3rot + "," + t3x + "," + t3y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t4x = 224.8 + 200;
	var t4y = 162;
	var t4rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle4")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t4x, t4y,tradius))
	    .attr("transform", " rotate(" + t4rot + "," + t4x + "," + t4y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t5x = 180 + 200;
	var t5y = 159.5;
	var t5rot = 30;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle5")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t5x, t5y,tradius))
	    .attr("transform", " rotate(" + t5rot + "," + t5x + "," + t5y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t6x = 155 + 200;
	var t6y = 197;
	var t6rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle6")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t6x, t6y,tradius))
	    .attr("transform", " rotate(" + t6rot + "," + t6x + "," + t6y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	    .style("fill", decagonColour);

		 // third motif test

	svg.append("svg:polygon")
	    .attr("id", "hexagon1")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(6,600, 200, 25))
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", pentacleColour);

	var tradius = 44;

	var t1x = 174.8 + 400;
	var t1y = 244;

	svg.append("svg:polygon")
	    .attr("id", "triangle1")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t1x, t1y,tradius))
	    .attr("transform", " rotate(30," + t1x + "," + t1y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	.attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t2x = 225.3 + 400;
	var t2y = 243.5;
	var t2rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle2")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t2x, t2y,tradius))
	    .attr("transform", " rotate(" + t2rot + "," + t2x + "," + t2y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t3x = 250.5 + 400;
	var t3y = 199.5;
	var t3rot = 30;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle3")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t3x, t3y,tradius))
	    .attr("transform", " rotate(" + t3rot + "," + t3x + "," + t3y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t4x = 224.8 + 400;
	var t4y = 156;
	var t4rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle4")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t4x, t4y,tradius))
	    .attr("transform", " rotate(" + t4rot + "," + t4x + "," + t4y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t5x = 174.2 + 400;
	var t5y = 156.5;
	var t5rot = 30;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle5")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t5x, t5y,tradius))
	    .attr("transform", " rotate(" + t5rot + "," + t5x + "," + t5y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	.style("fill", decagonColour);

	var t6x = 149 + 400;
	var t6y = 200.5;
	var t6rot = 210;
	
	svg.append("svg:polygon")
	    .attr("id", "triangle6")
	    .attr("visibility", "visible")
	    .attr("points", calculatePolygonPoints(3,t6x, t6y,tradius))
	    .attr("transform", " rotate(" + t6rot + "," + t6x + "," + t6y + ")")
	    .attr("fill", "none")
	    .attr("stroke","black")
	    .attr("stroke-width", "1")
	    .style("fill", decagonColour);




	function calculatePolygonPoints(sides, centerX, centerY, radius) {

	    var results = "";
	    var angle = Math.PI / sides;
	    var r = radius;

	    for (var i = 0; i < sides; i++) {
		var currX = centerX + Math.cos(i * 2 * angle) * r;
		var currY = centerY + Math.sin(i * 2 * angle) *  r;

				// Our first time we simply append the coordinates
		// subsequent times we append a ", " to distinguish
		// each coordinate pair.

		if (i == 0)
		{
		    results = currX + "," + currY;
		}
		else
		{
		    results += "," + currX + "," + currY;
		}
	    }

	    return results;
	}	



    },
    
    componentDidMount: function() {
	this.drawTiling();

    },

    svgStyle: {
	margin: 'auto',
	display: 'block',
	float: 'right',
	marginTop: '7',
	marginBottom: '25'
    },


    render: function() {

	return(
	    <svg id="pentagonsandtriangles" style = {this.svgStyle}>
	    </svg>
	);

    }
});
