import { argv } from "node:process";

if (argv.length < 5) throw new Error("Please enter complete information");


const operation = argv[3];
let values = argv.slice(4);

if (argv[2] !== "--operation") throw new Error("Add --operation to continue");

if (
  !["addition", "subtraction", "multiplication", "division"].includes(operation)
) {
  throw new Error("Enter Valid Operation");
}

if (values.length < 2) {
  throw new Error("Insufficient Values");
}

values = values.map(Number);

if (values.some((value) => isNaN(value))) {

  throw new Error("Enter valid Values");
  
}

if (operation == "addition") {

  const ans = values.reduce((arg, val) => arg + val, 0);
  console.log(`Ans is ${ans}`);

} else if (operation == "subtraction") {

  if (values.length > 2) throw new Error("Only 2 values allowed");
  const value = values[0] - values[1];
  console.log(`Ans is ${value}`);

} else if (operation == "multiplication") {

  const ans = values.reduce((arg, val) => arg * val, 1);
  console.log(`Ans is ${ans}`);

} else if (operation == "division") {

  if (values.length > 2) throw new Error("Only 2 values allowed");
  if (values[1] == 0) throw new Error("Denominator cann't be zero");
  const ans = +values[0] / values[1];
  console.log(`Ans is ${ans}`);

}
