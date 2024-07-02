const square = function(x) {
    return x*x
}

console.log(square(3))

const sq=(x)=>{
    return x*x
}

console.log(sq(2))

const mul=(x)=>x*x
console.log(mul(4))

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    // const that=this

    console.log("Guest List for " + this.name);

    this.guestList.forEach( (guest)=> {
      console.log(guest + " is attending " + this.name);
    })
  }
}

event.printGuestList();
