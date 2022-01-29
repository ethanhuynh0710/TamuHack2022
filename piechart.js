anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "Housing", value: 32},
        {x: "Groceries", value: 10},
        {x: "Transportation", value: 25},
        {x: "Education", value: 5},
        {x: "Other", value: 15},
    ];
    
    // create the chart
    var chart = anychart.pie();
    
    // set the chart title
    chart.title("Your Expenditure History in the last 30 months");
    
    // add the data
    chart.data(data);
    chart.sort("desc");
    // set legend position
    chart.legend().position("right");
    // set items layout
    chart.legend().itemsLayout("vertical");  
    
    // display the chart in the container
    chart.container('container');
    chart.draw();
    
    });