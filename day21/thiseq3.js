const arr = [
  {
    firstName: "John",
    lastName: "Doe",
    id: 6,
    myFunction: function () {
      return this;
    }
  },
  {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
      return this;
    },
  },
  {
    firstName: "John",
    lastName: "Doe",
    id: 1,
    myFunction: function () {
      return this;
    },
  },
  {
    firstName: "John",
    lastName: "Doe",
    id: 100,
    myFunction: function () {
      return this;
    },
  },
];
arr.sort((a,b)=>a.id-b.id);
console.log(arr);
