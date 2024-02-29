// users enter priority as 1,2 or 3 but we display it as Low, Medium, High
export const priorityNumberToString = (priority) => {
    if (priority === '1') {
      return ['High', 'red']
    } else if (priority === '2') {
      return ['Medium', 'yellow']
    } else {
      // priority 3 and more is of 'Low' priority
      return ['Low', 'green']
    }
}

export const prettifyStatus = (status) => {
    if (status === 'toDo') {
        return 'To Do'
    } else if (status === 'inProgress') {
        return 'In Progress'
    }  else if (status === 'completed') {
        return 'Completed'
    } 
}
