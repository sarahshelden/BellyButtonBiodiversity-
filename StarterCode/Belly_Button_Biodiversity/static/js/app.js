function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample

   var url = `/metadata/${sample}`;
   d3.json(url).then(function (sample) {



    // Use d3 to select the panel with id of `#sample-metadata`

   var panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata

        panel.html("");


    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

       Object.entries(sample).forEach(function ([key, value]) {
           var row = panel.append("panel-body");
        });
});

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots

  d3.json(url).then(function(data) {


     // @TODO: Build a Bubble Chart using the sample data

     //how to build bubble chart in plotly
     // identify variables and assign to sample data

     var x = data.
     var y = data 

     // create a trace

     var trace = {
       x:
       y:
       text:
       mode:
       marker: {

       }
     }

     var data = [trace]

  })




  







    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).

    // will need to build trace



  var url = `/sample/${sample}`;
  d3.json(url).then(function(sample) {

  })
}
 
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboardd
init();
