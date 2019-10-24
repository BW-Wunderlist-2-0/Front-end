export const toggleShowCompleted = (tasks, showCompleted) => {

  if (showCompleted === false) {
    return tasks.filter(entry => entry.completed = false)
  }
  else {
    return tasks
  }
}

