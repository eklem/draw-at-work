import { Tldraw } from 'tldraw'
import '../workshop.css'

export default function workshopB() {
  return (
    <div>
      <div id="workshopagenda" style={{ position: 'fixed'}}>
        <h1>B - Speed & precision</h1>
        <input className="taskDone" type="checkbox"></input>
        <div className="task">
          <h2 className="tasktitle">Task 01</h2>
          <p className="task">Main task description</p>
          <ul>
            <li>Task B.01.1</li>
            <li>Task B.01.2</li>
          </ul>
          <p className="time">Time: [time]</p>
        </div>
      </div>
      <div id="tldrawcontainer" style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="workshopB" />
      </div>
    </div>
  )
}