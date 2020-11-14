// from data.js
var tableData = data;

// view data
console.log(tableData);

// get a reference to table body tag
var tbody = d3.select("tbody");

// build table(row,data,)
// add tr
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    // only using value not key
    Object.entries(ufo).forEach(([key, value]) => {
        // add td
      var cell = row.append("td");
    //   add values
      cell.text(value);
    });
  });
  
