// define interface for Student object
interface Student {
  name: string;
  score?: number;
}

// assign interface/type to the function definition properly
function findTopNames(students) {
  let passed = students.filter((x) => x.score > 8).map((x) => x.name);
  return passed;
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//660610776 ปาณัท  แก้วลังกา
