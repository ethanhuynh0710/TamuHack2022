window.storeUsername=storeUsername;
function storeUsername(){
    console.log("username stored");
    localStorage.username = document.getElementById("username").value;
    localStorage.balance = parseFloat(2224+122.14);
    location.href='main.html';
    
    localStorage.list1="";//Housing
    localStorage.list2="";//Groceries
    localStorage.list3="";//Transportation
    localStorage.list4="";//Education
    localStorage.list5="";//Other
    
    const t1 = {
        name: "HEB Groceries",
        date:"2022-22-1",
        price:122.00,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
          }
    };

    const t2 = {
        name: "Rent",
        date: "2022-12-1",
        price: 652.00,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
        }
    };
    
    const t3 = {
        name: "Car payment",
        date: "2022-22-2",
        price: 400.00,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
        }
    };

    const t4 = {
        name: "Bowling",
        date: "2022-23-2",
        price: 50.00,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
        }
    };

    const t5 = {
        name: "Tuition payment",
        date: "2022-23-3",
        price: 1000.00,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
        }
    };

    const t6 = {
        name: "Receipt",
        date: "2022-30-1",
        price: 122.14,
        toString : function() {
            return this.name + "/" + this.date + "/" + this.price;
        }
    };
   
    localStorage.list1 += t2.toString()+"+";
    localStorage.list2 += t1.toString() + "+" + t6.toString()+"+"
    localStorage.list3 += t3.toString() + "+" 
    localStorage.list4 += t5.toString() + "+" 
    localStorage.list5 += t4.toString() + "+" 
    
}



const test = {
    name: "John",
    date : "1/2/3",
    price : 45,
    toString : function() {
      return this.name + "-" + this.date + "-" + this.price;
    }
};



