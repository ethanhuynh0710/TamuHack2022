function formSubmitted(e) {
    
    //window.location.href = "http://localhost:5500/logger.html"

    // const objToAdd = {
    //     name: document.forms["form-log"].elements["text-name"].value,
    // }
    var inputName = document.forms["form-log-test"].elements["Name"].value;
    var inputType = document.forms["form-log-test"].elements["Type"].value;
    var inputPrice = document.forms["form-log-test"].elements["Price"].value;
    var inputDate = document.forms["form-log-test"].elements["Date"].value;
    console.log(typeof(inputName));
    console.log(typeof(inputDate));
    console.log(typeof(inputPrice));
    let obj = {
        name: inputName,
        date : inputDate,
        price : parseFloat(inputPrice),
        toString : function() {
          return inputName + "/" + inputDate + "/" + inputPrice;
        }
    };
    console.log(typeof(obj.price));
    localStorage.balance=parseFloat(localStorage.balance)+parseFloat(obj.price);
    if(inputType == "Housing")
        localStorage.list1 += obj.toString() + "+";
    else if(inputType == "Groceries")
        localStorage.list2 += obj.toString() + "+";
    else if(inputType == "Transportation")
        localStorage.list3 += obj.toString() + "+";
    else if(inputType == "Education")
        localStorage.list4 += obj.toString() + "+";
    else
        localStorage.list5 += obj.toString() + "+";

    alert("Transaction has been added.")
}