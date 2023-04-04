// function setup(["beto", "joha", "aitana", "flavia"])
// isInDictionary("beto") = true
// isInDictionary("ron") = false
// isInDictionary("*eto") = true
// isInDictionary("bet*") = false

// optimiza the constructor the best that you can

class MyDictionary {
  myArray = [];

  constructor(data) {
    this.myArray.push(...data);
  }

  convertToObj() {
    const result = this.myArray.reduce((acc, curr) => {
      acc[curr] = curr;
      return acc;
    }, {});

    return JSON.stringify(result);
  }

  isIn(word) {
    if (this.myArray.includes(word)) return true;

    if (!word.startsWith("*")) return false;

    let found = false;

    this.myArray.forEach((item) => {
      const newItem = addWildcard(item);

      if (newItem === word) {
        found = true;
        return;
      }
    });

    return found;
  }
}

const addWildcard = (value) => {
  return "*" + value.toString().substring(1, value.length);
};

export const Main = () => {
  const target = new MyDictionary(["beto", "joha", "aitana", "flavia"]);

  console.log(`SEARCHING beto: ${target.isIn("beto")}`); // true
  console.log(`SEARCHING don: ${target.isIn("don")}`); // false
  console.log(`SEARCHING *eto: ${target.isIn("*eto")}`); // true
  console.log(`SEARCHING bet*: ${target.isIn("bet*")}`); // true

  console.log(`ToObject: ${target.convertToObj()}`);
};
