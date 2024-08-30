import { useState } from "react"
interface checkbox {
  id: string,
  value: string,
}

function TaskCheckbox(props: checkbox){
  var [done, setDone] = useState(false);
  // check indexedDB if element exists and get it
  // --> if not, write it
  // https://github.com/jakearchibald/idb?tab=readme-ov-file#article-store
  // https://github.com/jakearchibald/idb?tab=readme-ov-file#typescript
  // [code here]
  console.log(props.id + ' ' + props.value + ' ' + done)
  
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
