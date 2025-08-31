function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("add expects numbers");
  }
  return a + b;
}




function isTaskComplete(task) {
  if (!task || typeof task !== "object") return false;
  return task.done === true;
}
module.exports = { add, isTaskComplete };