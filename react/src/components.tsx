import { useState } from "react"
interface checkbox {
  id: string,
  value: string,
}

function TaskCheckbox(props: checkbox){
  var [done, setDone] = useState(false);
  // check indexedDB if element exists, if not, write it
  // [code here]
  function handleChange(e: any) {
    // change state in indexedDB
    // [code here]
    setDone(e.target.checked)
  }
  return (
    <input type="checkbox" onChange={handleChange} id={props.id} value={props.value} checked={done}/>
  )
}

export default TaskCheckbox;
