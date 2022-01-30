window.storeUsername=storeUsername;
function storeUsername(){
    console.log("username stored");
    localStorage.username = document.getElementById("username").value;
    localStorage.balance = parseFloat(50.55);
    location.href='main.html';
    
    localStorage.list1="";//Housing
    localStorage.list2="";//Groceries
    localStorage.list3="";//Transportation
    localStorage.list4="";//Education
    localStorage.list5="";//Other
    
    const t1 = {
        name: "box",
        date:"1-22-2212",
        price:22.0,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
          }
    };

    const t2 = {
        name: "walgreens",
        date: "1-21-2022",
        price: 22,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
        }
    };
    
    const t3 = {
        name: "robot",
        date: "2-21-2022",
        price: 16.55,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
        }
    };
    /* TESTING
    localStorage.list1 += t1.toString() + "+" + t2.toString()+"+";
    localStorage.list2 += t3.toString() + "+";
    console.log(localStorage.list1);
    console.log(localStorage.list2);
    */
}



const test = {
    name: "John",
    date : "1/2/3",
    price : 45,
    toString : function() {
      return this.name + "-" + this.date + "-" + this.price;
    }
};



