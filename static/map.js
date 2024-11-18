// When styling the data using the overall rank value, the following interval classifications should help:
// 1. Low - 0 to .25
// 2. Low to Moderate - 0.25 to 0.50
// 3. Moderate to High - 0.50 to .75
// 4. High - .75 to .90
// 5. High Top - .90 to 1

let projection = d3.geoMercator()
    .scale(400)
    .translate([200, 280])
    .center([0, 5]);

let geoGenerator = d3.geoPath()
    .projection(projection);

function handleMouseover(e, d) {
    let pixelArea = geoGenerator.area(d);
    let bounds = geoGenerator.bounds(d);
    let centroid = geoGenerator.centroid(d);
    let measure = geoGenerator.measure(d);

    d3.select('#content .info')
        .text(d.properties.name + ' (path.area = ' + pixelArea.toFixed(1) + ' path.measure = ' + measure.toFixed(1) + ')');

    d3.select('#content .bounding-box rect')
        .attr('x', bounds[0][0])
        .attr('y', bounds[0][1])
        .attr('width', bounds[1][0] - bounds[0][0])
        .attr('height', bounds[1][1] - bounds[0][1]);

    d3.select('#content .centroid')
        .style('display', 'inline')
        .attr('transform', 'translate(' + centroid + ')');
}

function update(geojson) {
    let u = d3.select('#content g.map')
        .selectAll('path')
        .data(geojson.features);

    u.enter()
        .append('path')
        .attr('d', geoGenerator)
        .on('mouseover', handleMouseover);
}

// REQUEST DATA
d3.json('../static/africa.json')
	.then(function(json) {
		update(json)
	});


