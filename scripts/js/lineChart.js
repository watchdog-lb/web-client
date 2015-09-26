var lineChart = (function() {
    // Public API.
    return {
        generate: generate
    };

    var margin,
        width,
        height,
        parseDate,
        x, y, xAxis, yAxis,
        line,
        svg;

    function generate() {
        margin = {top: 20, right: 20, bottom: 30, left: 50};
        width = 960 - margin.left - margin.right;
        height = 500 - margin.top - margin.bottom;

        parseDate = d3.time.format("%d-%b-%y").parse;

        x = d3.time.scale()
            .range([0, width]);

        y = d3.scale.linear()
            .range([height, 0]);

        xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        line = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.close); });

        svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.csv("data/data.csv", function(error, data) {
            if (error) throw error;

            data.forEach(function(d) {
                d.date = parseDate(d.date);
                d.close = +d.close;
            });

            x.domain(d3.extent(data, function(d) { return d.date; }));
            y.domain(d3.extent(data, function(d) { return d.close; }));

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Price ($)");

            svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", line);
        });
    }
})();
