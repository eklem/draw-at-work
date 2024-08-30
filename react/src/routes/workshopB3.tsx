import { Tldraw } from 'tldraw'
import '../workshop.css'

export default function WorkshopB3() {
  return (
    <div>
      <div id="workshopagenda" style={{ position: 'fixed'}}>
        <h1>C - Humans & Interaction</h1>
        <input className="taskDone" type="checkbox"></input>
        <div className="task">
          <h2 className="tasktitle">01 - Task title</h2>
          <p className="task">Main task description:</p>
          <ul>
            <li>Task C.01.1</li>
            <li>Task C.01.2</li>
          </ul>
          <p className="time">Time: [time]</p>
        </div>
      </div>
      <div id="tldrawcontainer" style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="workshopC" />
      </div>
    </div>
  )
}