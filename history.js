fillTable();
function fillTable(){
    var sortedList = sortedItems();
    for(var i=0;i<sortedList.length;++i){
        addRow(sortedList[i]);
    } 
}
function addRow(obj){
    var table = document.getElementById("expenditureHistory");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = obj.date;
    cell2.innerHTML = obj.name;
    cell3.innerHTML = "$"+obj.price.toFixed(2);
}


function parseExpenses(allTransactions) {
    if(allTransactions.length!=0){
        allTransactions = allTransactions.substring(0, allTransactions.length-1);
    }
    else{
        return [];
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

function sortedItems(){
    var list=[];
    var l1 = parseExpenses(localStorage.list1);
    var l2 = parseExpenses(localStorage.list2);
    var l3 = parseExpenses(localStorage.list3);
    var l4 = parseExpenses(localStorage.list4);
    var l5 = parseExpenses(localStorage.list5);
    var combined = [l1,l2,l3,l4,l5];
    for(var i=0;i<combined.length;++i){
        console.log(combined[i].length);
        if(combined[i].length>0){
            list=list.concat(combined[i]);
        }
    }
    console.log(list.length);
    var sortedList = list.splice(0);
    sortedList.sort(function(a,b){
        var date1=a.date.split("-");
        var date2=b.date.split("-");
        for(var i=0;i<2;++i){
            date1[i]=parseInt(date1[i]);
            date2[i]=parseInt(date2[i]);
        }
        if(date1[2]!=date2[2]){
            return date1[2]-date2[2];
        }
        if(date1[1]!=date2[1]){
            return date1[1]-date2[1];
        }
        if(date1[0]!=date2[0]){
            return date1[0]-date2[0];
        }

    });
    console.log(sortedList.length);
    for(var i=0;i<sortedList.length;++i){
        console.log(sortedList[i].toString());
    }
    return sortedList;
}