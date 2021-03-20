Plotly.newPlot("plotArea", [{x: [1, 2, 5], y: [10, 20, 50]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", [trace], layout);

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

d3.json("samples.json").then(function(data){
   console.log(data);
});

// to get the .wfreq
d3.json("samples.json").then(function(data){
   wfreq = data.metadata.map(person => person.wfreq);
   console.log(wfreq);
});

// to get the .wfreq sorted
d3.json("samples.json").then(function(data){
   wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
   console.log(wfreq);
});

// to get the .wfreq with no null values 
d3.json("samples.json").then(function(data){
   wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
   filteredWfreq = wfreq.filter(element => element !=
null);
   console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
   firstPerson = data.metadata[0];
   Object.entries(firstPerson).forEach(([key, value]) =>
     {console.log(key + ': ' + value);});
});

