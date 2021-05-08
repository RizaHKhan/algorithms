const obj2 = { name: "Penis", type: "Animal" };
const obj = { name: "Foobar", type: "Human" };

for (const property in obj) {
  console.log(obj2[property]);
  obj2[property] = obj[property];
}

console.log(obj2);
