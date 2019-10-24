export const toggleShowCompleted = (tasks, showCompleted) => {

  if (!showCompleted) {
    return tasks.filter(entry => entry.completed = false)
  }
  else {
    return tasks
  }
}

