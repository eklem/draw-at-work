import { Tldraw } from 'tldraw'
import TaskCheckbox from '../components.tsx'
import '../workshop.css'

export default function WorkshopB2() {
  return (
    <div>
      <div id="workshopagenda" style={{ position: 'fixed'}}>
        <h1>B2 - Speed & precision</h1>
        <TaskCheckbox id="b2.1" value="b2"/>
        <div className="task">
          <h2 className="tasktitle">Task 01</h2>
          <p className="task">Main task description</p>
          <ul>
            <li>Task B2.01.1</li>
            <li>Task B2.01.2</li>
          </ul>
          <p className="time">Time: [time]</p>
        </div>
      </div>
      <div id="tldrawcontainer" style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="workshopB2" />
      </div>
    </div>
  )
}