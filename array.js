const employeeArr = [
  { id: 1, name: "michael", role: "instructor" },
  { id: 2, name: "ben", role: "marketer" },
];

// { id: 1, name: "michael", role: "instructor", [permissions]: true }
// { id: 2, name: "ben", role: "marketer", [permissions]: true },

const newArr = [];

const addPermissions = (arr, id, name, role) => {
  let permissions;
  let obj;

  if (role === "instructor") {
    permissions = "instructorPermissions";
    obj = {
      id: id,
      name: name,
      role: role,
      [permissions]: true,
    };
  } else if (role === "marketer") {
    permissions = "marketerPermissions";
    obj = {
      id: id,
      name: name,
      role: role,
      [permissions]: true,
    };
  } else {
    permissions = "permissions";
    obj = {
      id: id,
      name: name,
      role: role,
      [permissions]: false,
    };
  }

  arr.push(obj);
};

addPermissions(newArr, 1, "michael", "instructor");
addPermissions(newArr, 2, "ben", "marketer");
addPermissions(newArr, 3, "steve", "learner");

console.log(newArr);
