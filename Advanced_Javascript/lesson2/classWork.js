let app = (function () {
  const users = ["ivan", "oleg", "taras"];
  return {
    addUser: (val) => {
      users.push(val);
    },
    print: () => {
      console.log(users);
    },
  };
})();
app.addUser("89");
app.print();

let task2 = (function makeCount() {
  let c = 0;
  // return {
  //     next:()=>counter++,
  //     get:()=>console.log(counter),
  //     reset:()=>counter=0,
  //     set:(item)=>{counter=item}

  // }
  c++;
  return {
    set(val) {
      c = val;
    },
    get() {
      return c;
    },
    reset() {
      c = 0;
    },
    next() {
      c++;
    },
  };
})();
let firstName = "Tony";
const person100 = {
  firstName: "Fill",
  get: () => console.log(this.firstName),
};
