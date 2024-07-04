const key1 = "password";
const value1 = "securepassword";

const key2 = "genre";
const value2 = "action";

const myObj = {
  [key1]: value1,
};

// console.log(myObj);

const request = {
  body: {
    title: "book15",
    updateKey: "genre",
    updateValue: "horror",
  },
};

const filterObj = {
  title: request.body.title,
};

const updateObj = {
  [request.body.updateKey]: request.body.updateValue,
};

console.log(filterObj, updateObj);

// {filter obj}, {update obj}
