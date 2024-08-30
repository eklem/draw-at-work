interface checkbox {
  id: string,
  value: string,
}

function TaskCheckbox(props: checkbox){
  return (
    <input type="checkbox" id={props.id} value={props.value}/>
  )
}

export default TaskCheckbox;
