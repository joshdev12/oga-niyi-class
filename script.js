// push,pop,shift,unshift,slice,join, findIndex, splice,sort,filter,every,some,reduce,includes,indexOf,lastIndexOf,concat

let result = document.querySelector("#result");

let string = [];
for(let i = 1; i <= 10; i++){
  string.push(i)
}
console.log(string)



//findIndex
let aaa = [2,6,6,40,3]

console.log(aaa.findIndex(value => value > 5))

//stopFindIndex



const nums = [800, 20, 10, 40, 500, 67, 677, 800, 100, 9, 1];

let total = nums.reduce(((acc, eachNum)=> acc + eachNum), 0)
console.log(total)

//every
const age = [1, 2, 3, 4, 5, -1];
let isPresent = age.every(num => num > 0 )

console.log(isPresent)

const users = [
  {
    firstname: "Tolu",
    mname: "",
    lname: "AKanfe"
  },
  {
    firstname: "Marquee",
    mname: "Aminat",
    lname: "Ajao"
  }
]

let allMiddleNamePresent = users.every(fullname => fullname.mname)
console.log(allMiddleNamePresent)
//every end

//some
const agee = [1, 2, 3, 4, 5, -1];
let isPresente = agee.every(num => num > 0 )

console.log(isPresente)

const userss = [
  {
    firstname: "Tolu",
    mname: "",
    lname: "AKanfe"
  },
  {
    firstname: "Marquee",
    mname: "Aminat",
    lname: "Ajao"
  }
]

let allMPresent = userss.every(fullname => fullname.mname)
console.log(allMPresent)
//some end

//reduce start
const products = [
  {
    name: "Shoe",
    price: 700,
    quantity: 20
  },
  {
    name: "Shirt",
    price: 200,
    quantity: 1
  },
  {
    name: "Belt",
    price: 200,
    quantity: 30
  }
]

// let shoe = products.filter((value, index, array)=> array[index].name === "Shoe" && array[index + 2].name === "Belt")

let shoe = products.filter((value)=> value.name === "Shoe" || value.name == "Shirt")

let shoeprice = shoe.reduce((sum, each)=> sum + (each.price * each.quantity), 0)
console.log(shoeprice)
let cartTotal = products.reduce((sum, eachProduct)=> sum + (eachProduct.price * eachProduct.quantity), 100)

console.log(cartTotal)
//reduce end

//filter start
let filter = nums.filter((number)=> number % 2 === 0 )

const people = [
  {
    name: "Tolu",
    age: 18,
  },
  {
    name: "Tolu",
    age: 10,
  },
  {
    name: "Tolu",
    age: 4,
  },
  {
    name: "Tolu",
    age: 20,
  },
]
console.log(people[0])
let adult = people.filter((person)=> person.age >= 18);

const repeated = [1,2,3,1,2,4,5,6,1,8,9];

let distinct = repeated.filter((value, index, array)=> array.indexOf(value) == index)

console.log(distinct);
console.log(adult)
console.log(filter);
//filter end
let num = [2,3,4]
const num2 = nums.concat(num)
console.log(num2)
let check = nums.includes(800);
console.log(nums.lastIndexOf(800));
console.log(check)
//anonymous callback function
nums.sort((a, b) => {
  return b - a;
});

nums.sort((a, b) => b - a);

// function sortNum(ade, taye) {
//   return ade - taye;
// }

// nums.push([5, 7, [99, 88, 111]], { name: "Niyi", age: 17 });
// console.log(nums[4][2][1]);
// console.log(nums[5].age);

// let slice = nums.slice();

// let deleted = nums.splice(1, 0, 99, 100, 101, "Ade");

// console.log(slice);

// let deleted = nums.pop();
// let  a = nums.join(", ");

result.innerHTML = nums;
console.log(nums);
// console.log(deleted);
