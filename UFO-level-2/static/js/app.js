// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.defineProperties(ufoSightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
