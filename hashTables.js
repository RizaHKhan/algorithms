class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  calculateHash(name, age) {
    return name + age;
  }

  addItem(item) {
    const hash = this.calculateHash(item.name, item.age);

    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = item;
      this.length++;
    } else if (Array.isArray(this.values[hash])) {
      this.values[hash].push(item);
    } else {
      const temp = this.values[hash];
      this.values[hash] = [];
      this.values[hash].push(temp);
      this.values[hash].push(item);
    }
  }

  deleteItem(item) {
    const hash = this.calculateHash(item.name, item.age);

    if (hash) {
      if (Array.isArray(this.values[hash])) {
        for (let [i, v] of this.values[hash].entries()) {
          if (compareObjects(v, item)) {
            this.values[hash].splice(i, 1);
          }
        }
      } else {
        delete this.values[hash];
        this.length--;
      }
    }
  }

  findItem(item) {
    const hash = this.calculateHash(item.name, item.age);
    if (hash) {
      if (Array.isArray(this.values[hash])) {
        for (let i of this.values[hash]) {
          if (compareObjects(i, item)) {
            return i;
          }
        }
      } else {
        return this.values[hash];
      }
    }
  }
}

function compareObjects(a, b) {
  for (const item in a) {
    if (a[item] !== b[item]) {
      return false;
    }
  }
  return true;
}

const users = [
  { name: "riza", age: 35 },
  { name: "john", age: 45 },
  { name: "pitbull", age: 15 },
  { name: "bisping", age: 25 },
  { name: "jay", age: 25, foo: "bar" },
  { name: "jay", age: 25, foo: "car" },
  { name: "edward", age: 55 },
  { name: "nina", age: 75 },
  { name: "bently", age: 85 },
  { name: "karen", age: 63 },
  { name: "witcher", age: 12 },
  { name: "frank", age: 23 },
  { name: "illadin", age: 55 },
  { name: "jay", age: 25, foo: "bus" },
];

const ht = new HashTable();

for (let x = 0; x < users.length; x++) {
  ht.addItem(users[x]);
}

ht.deleteItem(users[5]);
ht.deleteItem(users[13]);
console.log(ht.values["jay25"]);
