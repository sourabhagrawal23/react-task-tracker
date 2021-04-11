import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: false
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 7th at 9:30pm',
        reminder: false
      }
    ]
  )
  //Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  ///Toggle Reminder

  const toggleReminder = ((id) => {
    alert({ id });
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  })

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No task to Show'}
    </div>
  );
}

export default App;
