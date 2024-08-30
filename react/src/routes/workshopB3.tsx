import { Tldraw } from 'tldraw'
import TaskCheckbox from '../components.tsx'
import '../workshop.css'

export default function WorkshopB3() {
  return (
    <div>
      <div id="workshopagenda" style={{ position: 'fixed'}}>
        <h1>B3 - Humans & Interaction</h1>
        <TaskCheckbox id="b3.1" value="b3"/>
        <div className="task">
          <h2 className="tasktitle">01 - Task title</h2>
          <p className="task">Main task description:</p>
          <ul>
            <li>Task B3.01.1</li>
            <li>Task B3.01.2</li>
          </ul>
          <p className="time">Time: [time]</p>
        </div>
      </div>
      <div id="tldrawcontainer" style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="workshopB3" />
      </div>
    </div>
  )
}