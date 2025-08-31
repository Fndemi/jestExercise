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




function isTaskOverdue(task, today) {
  if (!task || !task.dueDate) {
    return false; // no due date means not overdue
  }

  const due = new Date(task.dueDate);
  const now = new Date(today);

  if (isNaN(due.getTime()) || isNaN(now.getTime())) {
    throw new Error("Invalid date format");
  }

  // Compare only dates (not time)
  const dueDateOnly = due.toISOString().split("T")[0];
  const todayOnly = now.toISOString().split("T")[0];

  return dueDateOnly < todayOnly;
}


module.exports = { add, isTaskComplete, isTaskOverdue };
