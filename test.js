const test = {
    name: "John",
    date : "1/2/3",
    price : 45,
    toString : function() {
      return this.name + "-" + this.date + "-" + this.price;
    }
};

console.log(test.toString());