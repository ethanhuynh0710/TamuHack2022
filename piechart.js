function categorySum(list){
    var sum=0;
    for(var i=0;i<list.length;++i){
        sum+=list[i].price;
    }
    return sum;
}

function parseExpenses(allTransactions) {
    if(allTransactions.length!=0){
        allTransactions = allTransactions.substring(0, allTransactions.length-1);
    }
        
    
    const fullList = allTransactions.split("+");
    let objects = [];

    fullList.forEach(function(item, index, array) {
        const items = item.split("/");
        const update = {
            name: items[0],
            date : items[1],
            price : parseFloat(items[2]),
            toString : function() {
                return this.name + "/" + this.date + "/" + this.price;
            }
        };
        
        objects.push(update);
    })

    return objects;
}

anychart.onDocumentReady(function() {

    // set the data
    let objects = parseExpenses(localStorage.list1);    
    console.log(objects.length);
    
    for(var i=0;i<objects.length;++i){
        console.log("Object x:",objects[i].toString())
    }
    var data = [
        {x: "Housing", value: categorySum(parseExpenses(localStorage.list1))},
        {x: "Groceries", value: categorySum(parseExpenses(localStorage.list2))},
        {x: "Transportation", value: categorySum(parseExpenses(localStorage.list3))},
        {x: "Education", value:categorySum(parseExpenses(localStorage.list4))},
        {x: "Other", value: categorySum(parseExpenses(localStorage.list5))},
    ];
    
    // create the chart
    var chart = anychart.pie();
    
    // set the chart title
    chart.title("Expenditure by Category");
    
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