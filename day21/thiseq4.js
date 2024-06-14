const details = {
    fullName: function() {
      return this.firstName + " " + this.Text1+" "+this.Gender+" "+this.Text2;
    }
  }
  const person2 = {
    firstName:"Divin",
    Gender: "Homosexicual",
  }
  const person3 = {
    Text1:"is",
    Text2: "that's make him gay",
  }
  const bb=Object.assign({},person2,person3);
  console.log( details.fullName.call(bb));
